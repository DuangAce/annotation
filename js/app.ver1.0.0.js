// VERSION 1.0.0
// Author: Siyu Qian ( David )
var text; // global variable
var isExists = false; //global variable

//REMOVE ELEMENT FUNCTION
Element.prototype.remove = function(){
	this.parentElement.removeChild(this);
}

//REMOVE NODE FUNCTION
NodeList.prototype.remove = function(){
	for( var i = this.length - 1; i>=0; i-- ){
		if( this[i] && this[i].parentElement ){
			this[i].parentElement.removeChild(this[i]);
		}
	}
}
//Use for insert After node
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function toggleSidebars(){
	var $sidebar = $("#sidebar-container"); 
	var $button = $("#slide-button");
	if ($sidebar.css("right") == "0px") {
        $sidebar.animate({'right': '-440px'});
        $button.html('<');
    }
    else {
        $sidebar.animate({'right': "0"});
        $button.html('>');
    }
}

function showSidebar(){
	var $sidebar = $("#sidebar-container"); 
	var $button = $("#slide-button");
	if ($sidebar.css("right") == "-440px") {
        $sidebar.animate({'right': '0'});
        $button.html('>');
    }
}

// function generateEditor(){
// 	var container = document.getElementById("annotation-main");
// 	var editor = document.createElement("div");
// 	editor.setAttribute("id","editor");
// 	container.appendChild(editor);

// 	// 获取元素
// 	var div = document.getElementById('editor');
// 	// 生成编辑器
// 	var editor = new wangEditor(div);
// 	editor.create();
// }

function tempEditor(){
	var container = document.getElementById("annotation-main");
	var editor = document.createElement("textarea");
	editor.setAttribute("id","editor");
	container.appendChild(editor);
	var editor = document.getElementById("editor");
	var button = document.createElement("button");
	button.setAttribute("id", "annotation-submit");
	button.setAttribute("name", "editor");
	button.setAttribute("onclick", "transferData()");
	var buttonValue = document.createTextNode("Submit");
	button.appendChild(buttonValue);
	insertAfter(editor,button);
	$("textarea").qeditor();
}

function displayWithAjax(data){
	// console.log('displayWithAjax');
	//process data , apart values
	var dataRead = data.split("(*)");

	var annotation = dataRead[0];
	var comment = dataRead[1];
	var result = document.getElementById("annotation-main");

	var outerContainer = document.createElement("div");
	outerContainer.setAttribute("class", "saved_container");

	var content = document.createElement("div");
	content.setAttribute("class", "annotation_saved");
	var textNode = document.createTextNode(annotation);
	content.appendChild(textNode);

	var commentContent = document.createElement("div");
	commentContent.setAttribute("class", "comment_saved");
	var textNode1 = document.createTextNode(comment);
	commentContent.appendChild(textNode1);

	outerContainer.appendChild(content);
	outerContainer.appendChild(commentContent);
	result.parentNode.insertBefore(outerContainer, result);
}

function transferData(){
	var annotation_text = $('#annotation-text').html();
	var editor_text = $('#editor').val();
	$.ajax({
		url:"data.php",
		data:({annotationText:annotation_text,editorText:editor_text}),
		type:"POST",
		error:function(data){
			console.error(data);
		},
		success:function(data){
			displayWithAjax(data);
		},
	});
}

//PUT SELECTION VALUE INTO SIDE BAR
function annotation(){
	// console.log(document.getElementsByClassName('annotation-main'));
	var surround = document.createElement("span");
	surround.setAttribute("class", "annotation-target");
	// Open up Sidebar
	showSidebar();
	//IF Editor is not opened
	if(document.getElementsByClassName('annotation-main').length == 0){
		// console.log("dada");
		//Annotation Inside Header
		var content = document.getElementById("annotation-container");
		var container = document.createElement("div");
		container.setAttribute("class","annotation-main");
		container.setAttribute("id","annotation-main");
		content.appendChild(container);

		var context = document.createElement("div");
		context.setAttribute("class","annotation-text");
		context.setAttribute("id","annotation-text");
		container.appendChild(context);

		var userSelection = window.getSelection().toString();
		var textNode = document.createTextNode(userSelection);
		context.appendChild(textNode);

		// generateEditor();
		tempEditor();
		//使用span标签包裹被选中的对象
		window.getSelection().getRangeAt(0).surroundContents(surround);
	}else{
		// console.log("didi");
		if(document.getElementById("annotation-main")){
			document.getElementById("annotation-main").remove();
		}
		//替换掉当前的annotation内容
		var content = document.getElementById('annotation-container');
		var container = document.createElement("div");
		container.setAttribute("class","annotation-main");
		container.setAttribute("id","annotation-main");
		content.appendChild(container);

		var context = document.createElement("div");
		context.setAttribute("class","annotation-text");
		context.setAttribute("id","annotation-text");
		container.appendChild(context);

		var userSelection = window.getSelection().toString();
		var textNode = document.createTextNode(userSelection);
		context.appendChild(textNode);

		// generateEditor();
		tempEditor();
		//使用span标签包裹被选中的对象
		window.getSelection().getRangeAt(0).surroundContents(surround);
	}
}

function isUserSelected(){
	text = window.getSelection().toString();
	console.info(text);
	if(text === '' || text=== null || text === undefined){
		//Do Nothing
		//alert("No selection");
		isExists = false;
		//remove annotation tags
		if(document.getElementById("additional-tag")){
			document.getElementById("additional-tag").remove();
		}
	}else{
		//Display Annotation Tags Under Selected Text
		//alert("Display Annotation Tags");
		if(isExists == false){
			var tags = document.createElement("span");
			tags.setAttribute("class",'button-container')
			var annotation = document.createElement("button");
			tags.appendChild(annotation);
			var buttonValue = document.createTextNode("Annotation");
			annotation.appendChild(buttonValue);
			annotation.setAttribute("id","additional-tag");
			annotation.setAttribute("onclick","annotation()");

			var sel = window.getSelection();
			if (sel.rangeCount > 0) {
	    		var range = sel.getRangeAt(0);
	    		range.collapse(false);
	    		range.insertNode(tags);
			}
			isExists = true;
		}
	}
}

function getUserSelection(){
	// var selection = document.getElementsByClassName("text");
	// for(var i = 0; i < selection.length;i++){
	// 	selection[i].addEventListener("mouseup",function(){ isUserSelected(); },false);
	// }

	var selection = document.getElementsByClassName("container");
	for(var i = 0; i < selection.length;i++){
		selection[i].addEventListener("mouseup",function(){ isUserSelected(); },false);
	}
}

window.onload=function(){
	getUserSelection();
}

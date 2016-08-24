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

function generateEditor(){
	var container = document.getElementById("annotation-main");
	var editor = document.createElement("div");
	editor.setAttribute("id","editor");
	container.appendChild(editor);

	// 获取元素
	var div = document.getElementById('editor');
	    // 生成编辑器
	var editor = new wangEditor(div);
	editor.create();
}

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
}

function displayWithAjax(data){
	var content = document.createElement("div");
	content.setAttribute("class", "annotation_saved");
	var textNode = document.createTextNode(data);
	content.appendChild(textNode);
	var result = document.getElementById("annotation_saved");
	result.appendChild(content);
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
	//IF Editor is not opened
	if(document.getElementsByClassName('annotation-main').length == 0){
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
	}else{
		//替换掉当前的annotation内容
		var content = document.getElementById('annotation-container');
		content.innerHTML = '';
		var container = document.createElement("div");
		container.setAttribute("class","annotation-main");
		content.appendChild(container);

		var context = document.createElement("div");
		context.setAttribute("class","annotation-text");
		container.appendChild(context);

		var userSelection = window.getSelection().toString();
		var textNode = document.createTextNode(userSelection);
		context.appendChild(textNode);

		// generateEditor();
		tempEditor();
	}


	//Editor opened

	//Annotation Editor

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

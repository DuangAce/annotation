var text; // global variable

//Function to add mark before and after user Selection
function markSelection(){
	var markerTextChar = "\ufeff";
	var markerTextCharEntity = "&#xfeff;";

	var markerEl, markerId = "sel_"
}

function isUserSelected(){
	text = window.getSelection().toString();
	console.info(text);
	if(text === '' || text=== null || text === undefined){
		//Do Nothing
		alert("No selection");
	}else{
		//Display Annotation Tags Under Selected Text
		alert("Display Annotation Tags");
	}
}

function getUserSelection(){
	var selection = document.getElementsByClassName("text");
	for(var i = 0; i < selection.length;i++){
		selection[i].addEventListener("mouseup",function(){ isUserSelected() },false);
	}
	
}

window.onload=function(){
	getUserSelection();
}

// function getSelectionText() {
// 		var text = "";
// 		if (window.getSelection) {
// 			text = window.getSelection().toString();
// 		} else if (document.selection && document.selection.type != "Control") {
// 			text = document.selection.createRange().text;
// 		}
// 		alert(text);
// 		return text;
// }



// $(document).ready(function(){
// 	var selection = document.getElementsByClassName("text");
// 	console.log(selection[0]);
// });




// var selection = document.getElementsByClassName("text");
// console.log(selection);

// console.log(selection[0]);

// alert(selection[0]);

// function showclick(){
// 	for(var i = 0; i < selection.length;i++){
// 		selection[i].addEventListener("click",function(){ alert("Thanks Again!"); },false);
// 	}
// }
// selection.onclick = function(){
// 	alert("Thanks for clicking me");
// };

// $(document).ready(function(){
// 	function getSelectionText() {
// 		var text = "";
// 		if (window.getSelection) {
// 			text = window.getSelection().toString();
// 		} else if (document.selection && document.selection.type != "Control") {
// 			text = document.selection.createRange().text;
// 		}
// 		return text;
// 	}

// 	$('p').mouseup(function() {
// 		var text = getSelectedText();
// 		if (text!='') alert(text);
// 	});
// });

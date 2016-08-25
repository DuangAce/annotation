<?php

include_once('database.php');

$annotation_text = $_POST['annotationText'];
$editor_text = $_POST['editorText'];

// echo "annotation_text:".$annotation_text."<br>";
// echo "editor_text:".$editor_text."<br>";
echo $annotation_text."(*)".$editor_text;

// Insert User input into the database
$sql = "INSERT INTO annotation (annotation, comment) VALUES ('$annotation_text', '$editor_text')";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();






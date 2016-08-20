<?php

$url = "http://".$_POST['enter_url'];

$webpage = file_get_contents($url);

// var_dump($webpage);

// echo htmlspecialchars($webpage);
$sidebar = '<iframe src="sidebar.html" scrolling="auto"></iframe>';

$webpage .= $sidebar;

echo $webpage;

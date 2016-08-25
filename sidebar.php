<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Side Bar Demo</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!--引入wangEditor.css-->
	<!-- <link rel="stylesheet" type="text/css" href="http://www.david-s-qian.com/annotation/dist/css/wangEditor.min.css"> -->
	<link rel="stylesheet" type="text/css" href="http://www.david-s-qian.com/annotation/dist/css/jquery.qeditor.css">
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
</head>
<body>
	<?php include_once('database.php'); ?>
	<div class="container" style="margin-left:200px;">
		<h1>TITLE 1</h1>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
		<h1>TITLE 2</h1>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
		<p class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
		<h3>TITLE 3</h3>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
	</div>
	<div class="sidebar-container" id="sidebar-container">	
		<div class="slide-topbar">
			<div class="slide-button" id="slide-button"><</div>
			<div class="sign"><a href="#">Sign up</a> / <a href="#">Log in</a></div>
		</div>
		<div class="sidebar-main">
			<div class="acc-info">
				To annotate this document<a href="#">create a free account</a> or<a href="#">log in</a>
			</div>
			<div class="tab-wrapper">
				<!--tab section 1-->
	    		<input type="radio" name="tab-radio" class="tab-radio" id="tab-radio-1" checked>
	    		<label for="tab-radio-1" class="tab-handler tab-handler-1">Annotation</label>
	    		
			    <!--tab section 2-->
			    <input type="radio" name="tab-radio" class="tab-radio" id="tab-radio-2">
			    <label for="tab-radio-2" class="tab-handler tab-handler-2">Page Notes</label>
	<!-- 		    <div class="tab-content tab-content-2"> Read From Database</div>
				</div> -->
			</div>
			<div class="tab-content" id="annotation-container">
				<div id="annotation-saved">
					<?php
						// If there are records in the database, displays them here
						$sql = "SELECT * FROM annotation";
						$result = $conn->query($sql);

						if ($result->num_rows > 0) {
						    // output data of each row
						    while($row = $result->fetch_assoc()) {
						    	echo "<div class='saved_container'>";
						        echo "<div class='annotation_saved'>".$row["annotation"]."</div>";
						        echo "<div class='comment_saved'>".$row["comment"]."</div>";
						        echo "</div>";
						    }
						} else {
						    // echo "0 results";
						}
						$conn->close();
					?>
				</div>
			</div>
	    	<div class="tab-content" id="pagenotes-container"></div>
	</div>

	<!--引入jquery和wangEditor.js-->   <!--注意：javascript必须放在body最后，否则可能会出现问题-->
<!-- 	<script type="text/javascript" <s></s>rc="http://www.david-s-qian.com/annotation/dist/js/lib/jquery-1.10.2.min.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="http://www.david-s-qian.com/annotation/dist/js/jquery.qeditor.js"></script>
	<script type="text/javascript" src="http://www.david-s-qian.com/annotation/js/app.min.js"></script>
	<script type="text/javascript">
		$("#slide-button").click(function(){
			toggleSidebars();
		});
	</script>
</body>
</html>
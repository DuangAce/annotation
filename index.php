<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Home Page</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<!-- Latest compiled JavaScript -->
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<form method="post" action="annotation.php">
		  <div class="form-group">
		  	<label for="enter_url">URL:</label>
		  	<input type="text" name="enter_url" class="form-control" id="enter_url">
		  </div>
		  <button type="submit" class="btn btn-default">Submit</button>
		</form>
	</div>
</body>
</html>
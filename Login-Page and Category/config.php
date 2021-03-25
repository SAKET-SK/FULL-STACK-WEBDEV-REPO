<?php
	$host = "localhost";
	$dbusername = "root";
	$dbpassword = "";
	$dbname = "pathology_data";

	$con = mysqli_connect($host, $dbusername, $dbpassword, $dbname);


	if($con)
	{
		?>
		//echo "Connection Successful";
		<script>
			alert("This form is successfully connected to Database!! Press OK to proceed.");
		</script>
		
<?php
	}
	else
	{
		echo "No connection";
	}
?>
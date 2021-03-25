<!DOCTYPE html>
<head>
    <title>Add Category</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="hero">
        <div class="form-box">
            <div class="button-box">
                <div id="btn">

                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 class="toggle-btn">Add Category</h3>
              
            </div>
            
            <form id="category" class="input-group" name="form2" method="POST">
                <input type="text" name="category_name" class="input-field" placeholder="Enter Category" required>
                <input type="text" name="Quantity" class="input-field" placeholder="Enter Qunatity" required>
                <input type="text" name="Price" class="input-field" placeholder="Enter Price" required>
            <br />
            <br />
            <br />
            <!--a href="forget_password.php">Forgot Password</a-->
            <br />
            <br />
                <button type="submit" name ="add_cat" class="submit-btn">Add Category</button>
            </form>

            <!--form id="register" class="input-group" name="form2" action="register.php" method="POST">
                <input type="text" name="new_username" class="input-field" placeholder="Enter Username" required>
                <input type="email" name="email" class="input-field" placeholder="Enter EmailID" required>
                <input type="password" name="password1" class="input-field" placeholder="Enter Password" required>
                <br />
                <br />
                <button type="submit" class="submit-btn">Sign Up</button>
            </!--form-->
        </div>
    </div>

    <script>
      /*  var x = document.getElementById("login");   */
       /* var y = document.getElementById("register");  */
        var z = document.getElementById("btn");

        /*function register(){
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        }*/

       /* function login(){
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0";
        } */
    </script>

</body>

<?php
 include_once 'config.php';
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "pathology_data";



// Create connection
$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

    $category_name = $_POST['category_name'];
    $Quantity = $_POST['Quantity'];
    $Price  = $_POST['Price'];

$sql = "INSERT INTO category (category_name, Quantity, Price)
VALUES ('$category_name', '$Quantity', '$Price')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

</html>
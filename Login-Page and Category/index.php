<!DOCTYPE html>
<head>
    <title>Login</title>
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
                <h3 class="toggle-btn">Log In</h3>
              
            </div>
            
            <form id="login" class="input-group" name="form1" method="POST">
                <input type="email" name="email" class="input-field" placeholder="Enter Email" required>
                <input type="text" name="username" class="input-field" placeholder="Enter Username" required>
                <input type="password" name="password" class="input-field" placeholder="Enter Password" required>
            <br />
            <br />
            <br />
            <a href="forget_password.php">Forgot Password</a>
            <br />
            <br />
                <button type="submit" class="submit-btn">Log In</button>
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
    include "config.php";
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password  = $_POST['password'];





if (!empty($email) || !empty($username) || !empty($password))
{

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "pathology_data";



// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{
  $SELECT = "SELECT email From login Where email = ? Limit 1";
  $INSERT = "INSERT Into login (email, username ,password)values(?,?,?)";

//Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("sss", $email,$username,$password);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>


</html>



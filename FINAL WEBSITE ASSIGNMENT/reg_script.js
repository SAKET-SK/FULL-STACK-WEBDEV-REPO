document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from being submitted
  
    let username = document.getElementById("u_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let phone = document.getElementById("phone").value;
    let street1 = document.getElementById("street1").value;
    let street2 = document.getElementById("street2").value;
    let city = document.getElementById("city").value;
    let region = document.getElementById("region").value;
    let postal_code = document.getElementById("postal_code").value;

    
    // validate the form
        if (username == "") 
        {
          alert("Please enter a username");
        } 
        else if (email == "") 
        {
          alert("Please enter an email address");
        } 
        else if (password == "") 
        {
          alert("Please enter a password");
        } 
        else if (password != confirmPassword) 
        {
          alert("The passwords do not match");
        } 
        else if (phone == "") 
        {
          alert("Please enter your phone number");
        } 
        else if (street1 == "") 
        {
          alert("Please enter Street 1 address");
        } 
        else if (street2 == "") 
        {
          alert("Please enter Street 2 address");
        } 
        else if (city == "") 
        {
          alert("Please enter your city");
        } 
        else if (region == "") 
        {
          alert("Please enter your region");
        } 
        else if (postal_code == "") 
        {
          alert("Please enter your postal code");
        } 
        else {
          // the form is valid, so we can submit it
          alert("Form is valid! Submitting form...");
        }
    
  });
  
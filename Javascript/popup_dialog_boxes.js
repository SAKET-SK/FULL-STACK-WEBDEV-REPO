// 1) Alert Box
// An alert box is often used if you want to make sure information comes through to the user.
// When an alert box pops up, the user will have to click "OK" to proceed.
function myAlertFunction() {
    alert("I am an alert box!");
}

// 2) Confirm Box
// A confirm box is often used if you want the user to verify or accept something. When a confirm box pops up, the user will have 
// to click either "OK" or "Cancel" to proceed.
// If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
function myConfirmFunction() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("confirm_text").innerHTML = txt;
}

// 3) Prompt Box
// A prompt box is often used if you want the user to input a value before entering a page.
// When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
// If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.
function myPromptFunction() {
    let text;
    let person = prompt("Please enter your name:", "YOUR NAME HERE");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("prompt_text").innerHTML = text;
  }
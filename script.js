// PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP
// PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP
// PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP
// PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP
// PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP PHP

function sendRequest(e) {
  e.preventDefault();

  if (validateemail(),checkdeuxemails()) {
      fetch("script.php", {
              method: "POST",
              body: new FormData(document.querySelector('form'))
          })

          .then((data) => data.json())
          .then((json) => console.log(json.response))
  }
}

// VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE
// VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE
// VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE
// VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE
// VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE VALIDATE

const inputemail = document.querySelector("#email1");
inputemail.addEventListener("change", validateemail);

function validateemail() {

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  $("#email1").removeClass("is-valid");
  $("#email1").removeClass("is-invalid");

  if (inputemail.value.match(mailformat)) {
    // alert("Valid email address!");
    // document.form.text1.focus();
    // return true;
    $("#email1").addClass("is-valid");
  } else {
    // alert("You have entered an invalid email address!");
    // document.form.text1.focus();
    // return false;
    $("#email1").addClass("is-invalid");
  }
}

// COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE
// COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE
// COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE
// COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE
// COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE COMPARE

const inputemaildeux = document.querySelector("#email2");
inputemaildeux.addEventListener("change", checkdeuxemails);

function checkdeuxemails() {

  $("#email1,#email2").removeClass("is-valid");
  $("#email1,#email2").removeClass("is-invalid");

  if (document.querySelector("#email1").value === document.querySelector("#email2").value) {
  // if(document.getElementById("email1").value === document.getElementById("email2").value) {
      // alert("matched")
    $("#email1,#email2").addClass("is-valid");
  } else {
      // alert("not matched")
      // $("#email1,#email2").hide();
      // $("#supercontaineremail").show();
      $("#email1,#email2").addClass("is-invalid");
    }
}

  function showForm() {
    var formContainer = document.getElementById("form-container");
    formContainer.style.display = "block";
  }

  function closeForm() {
    var formContainer = document.getElementById("form-container");
    formContainer.style.display = "none";
  }

  function submitForm(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactNumber").value;
    console.log("Full Name: " + fullName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Contact Number: " + contactNumber);
    // You can do further processing here, like sending data to a server
    // or displaying a success message to the user
    closeForm();
  }

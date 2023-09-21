// ----FOR YOU AND FOLLOWING CLICK BUTTON SECTION START HERE----

document.addEventListener("DOMContentLoaded", function () {
  // This code runs when the HTML content of your webpage has fully loaded
  // It ensures that your JavaScript code doesn't run before the HTML is ready
  // This is a common practice to avoid potential issues

  // Get all feed-option elements
  var feedOptions = document.querySelectorAll(".feed-option");

  // This line finds all elements with the class "feed-option" in your webpage
  // These elements are typically the ones that the user can click on

  // Add a click event listener to each feed-option element
  feedOptions.forEach(function (option) {
    // This code sets up an action when any of the "feed-option" elements is clicked

    option.addEventListener("click", function () {
      // This is what happens when a "feed-option" element is clicked

      // Remove 'active' class from all feed-options
      feedOptions.forEach(function (opt) {
        // This code removes the 'active' class from all "feed-option" elements

        opt.classList.remove("active");
      });

      // Add 'active' class to the clicked feed-option
      this.classList.add("active");
      // This code adds the 'active' class to the specific "feed-option" element that was clicked
      // It visually highlights the clicked option to show that it's active

      // Get the target data attribute (either "for-you" or "following")
      var target = this.getAttribute("data-target");
      // This code gets a special piece of information stored in the "data-target" attribute of the clicked element
      // This information helps identify which content to display

      // Hide all post containers
      var postContainers = document.querySelectorAll(
        ".for-you-post-container, .following-post-container"
      );
      postContainers.forEach(function (container) {
        // This code finds all elements with the class "for-you-post-container" or "following-post-container"
        // These elements typically hold content to display on your webpage

        container.style.display = "none";
        // This code hides all of these content containers by setting their display style to "none"
      });

      // Show the post container corresponding to the clicked option
      var selectedContainer = document.querySelector(
        "." + target + "-post-container"
      );
      if (selectedContainer) {
        // This code selects the content container that matches the "data-target" value
        // It shows that particular content container by setting its display style to "block"
        selectedContainer.style.display = "block";
      }
    });
  });

  // Initially, trigger a click on the "For you" span to display its content
  var forYouOption = document.querySelector(
    ".feed-option[data-target='for-you']"
  );
  if (forYouOption) {
    // This code automatically triggers a click on the "For you" option when the page loads
    // It ensures that some content is displayed right from the start
    forYouOption.click();
  }
});

// ----FOR YOU AND FOLLOWING CLICK BUTTON SECTION ENDS HERE----

// -----SIGN IN PURE JS STARTS HERE-----

const logInForm = document.getElementById("signInForm");
const userName = document.getElementById("name");
const userPassword = document.getElementById("password");
const errMessages = document.getElementById("errMsg");
const sucMessage = document.getElementById("sucMsg");
const genericError = document.getElementById("genericErrMsg");
const logInEmail = "earlmorningstar@gmail.com";
const logInPassword = "xclonepassword";
const homePage = "/homePage.html";

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorMessages = [];
  let successMessage = [];

  if (userName.value === "" || userName.value == null) {
    errorMessages.push("Username field cannot be blank");
  }

  if (userPassword.value === "" || userPassword.value == null) {
    errorMessages.push("Input your password");
  } else if (userPassword.value.length <= 6) {
    errorMessages.push("Password cannot be less than 6 characters");
  }

  if (userPassword.value.length >= 20) {
    errorMessages.push("Password cannot be 20 characters or more");
  }

  if (userPassword.value === "password" || userPassword.value === "Password") {
    errorMessages.push("Password cannot be 'password'");
  }

  if (userName.value == null && userPassword.value == null) {
    errorMessages.push("Fields cannot be blank");
  }

  if (userName.value === "" && userPassword.value === "") {
    errorMessages.push("Fields cannot be blank");
  }

  if (userName.value !== logInEmail) {
    errorMessages.push("Unregistered Email");
  }

  if (userPassword.value !== logInPassword) {
    errorMessages.push("Invalid password");
  }

  if (userName.value !== logInEmail || userPassword.value !== logInPassword) {
    errorMessages.push("Incorrect email or password");
  }

  if (userName.value === logInEmail && userPassword.value === logInPassword) {
    successMessage.push("Login successful! Redirecting...");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    errMessages.innerText = errorMessages.join(", ");
    errMessages.style.display = "block";
  } else {
    errMessages.innerText = "";
    errMessages.style.display = "none";
    errorMessages = [];
    sucMessage.innerText = successMessage;
    setTimeout(function () {
      window.location.href = homePage;
    }, 1000);
  }
});

// -----SIGN IN PURE JS END HERE-----

// Confirmation---

// const logInForm = document.getElementById("signInForm");
// const userName = document.getElementById("name");
// const userPassword = document.getElementById("password");
// const errMessages = document.getElementById("errMsg");
// const sucMessage = document.getElementById("sucMsg");
// const genericErrMessage = document.getElementById("genericErrMsg");
// const inputErrMessage = document.getElementById("inputPasswordMsg");
// const lessThanErrMessage =document.getElementById("lessThan6Msg");
// const moreThanErrMessage =document.getElementById("moreThan20Msg");
// const cantBePasswordErrMessage = document.getElementById("cantBePassMsg");
// const fieldCantBeErrMessage = document.getElementById("fieldCannotBeMsg");
// const unregisteredErrMessage = document.getElementById("unregisteredMsg");
// const invalidErrMessage = document.getElementById("invalidMsg");
// const incorrectErrMessage =  document.getElementById("incorrectMsg");

// const logInEmail = "earlmorningstar@gmail.com";
// const logInPassword = "xclonepassword";
// const homePage = "/homePage.html";

// logInForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let errorMessages = [];
//   let successMessage = [];
//   let genericErrorMsg = [];
//   let inputErrorMsg = [];
//   let lessThanErrorMsg = [];
//   let moreThanErrorMsg = [];
//   let cantBePasswordErrorMsg = [];
//   let fieldCantBeErrorMsg = [];
//   let unregisteredErrorMsg = [];
//   let invalidErrorMsg = [];
//   let incorrectErrMsg = [];

//   if (userName.value === "" || userName.value == null) {
//     errorMessages.push("Username field cannot be blank");
//   }

//   if (userPassword.value === "" || userPassword.value == null) {
//     inputErrorMsg.push("Input your password");
//   }

//   if (userPassword.value.length <= 6) {
//     lessThanErrorMsg.push("Password cannot be less than 6 characters");
//   }

//   if (userPassword.value.length >= 20) {
//     moreThanErrorMsg.push("Password cannot be 20 characters or more");
//   }

//   if (userPassword.value === "password" || userPassword.value === "Password") {
//     cantBePasswordErrorMsg.push("Password cannot be 'password'");
//   }

//   if (userName.value == null && userPassword.value == null) {
//     fieldCantBeErrorMsg.push("Fields cannot be blank");
//   }

//   if (userName.value === "" && userPassword.value === "") {
//     genericErrorMsg.push("Fields cannot be blank");
//   }

//   if (userName.value !== logInEmail) {
//     unregisteredErrorMsg.push("Unregistered Email");
//   }

//   if (userPassword.value !== logInPassword) {
//     invalidErrorMsg.push("Invalid password");
//   }

//   if (userName.value !== logInEmail || userPassword.value !== logInPassword) {
//     incorrectErrMsg.push("Incorrect email or password");
//   }

//   if (userName.value === logInEmail && userPassword.value === logInPassword) {
//     successMessage.push("Login successful! Redirecting...");
//   }

//   if (errorMessages.length > 0) {
//     e.preventDefault();
//     errMessages.innerText = errorMessages.join(", ");
//     errMessages.style.display = "block";
//   } else {
//     errMessages.innerText = "";
//     errMessages.style.display = "none";
//     errorMessages = [];
//     sucMessage.innerText = successMessage;
//     setTimeout(function () {
//       window.location.href = homePage;
//     }, 1000);
//   }
// });

// --------------------------------------------------

// const logInForm = document.getElementById("signInForm");
// const userName = document.getElementById("name");
// const userPassword = document.getElementById("password");
// const errMessages = document.getElementById("errMsg");
// const sucMessage = document.getElementById("sucMsg");
// const logInEmail = "earlmorningstar@gmail.com";
// const logInPassword = "xclonepassword";
// const homePage = "/homePage.html";

// // Create an array of error message elements
// const errorElements = [
//   document.getElementById("genericErrMsg"),
//   document.getElementById("inputPasswordMsg"),
//   document.getElementById("lessThan6Msg"),
//   document.getElementById("moreThan20Msg"),
//   document.getElementById("cantBePassMsg"),
//   document.getElementById("fieldCannotBeMsg"),
//   document.getElementById("unregisteredMsg"),
//   document.getElementById("invalidMsg"),
//   document.getElementById("incorrectMsg")
// ];

// logInForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Clear all error messages
//   errorElements.forEach((element) => {
//     element.innerText = "";
//   });

//   let errorMessages = [];
//   let successMessage = "";

//   if (userName.value === "") {
//     errorMessages.push("Username field cannot be blank");
//   }

//   if (userPassword.value === "") {
//     errorMessages.push("Input your password");
//   } else if (userPassword.value.length <= 6) {
//     errorMessages.push("Password cannot be less than 6 characters");
//   } else if (userPassword.value.length >= 20) {
//     errorMessages.push("Password cannot be 20 characters or more");
//   } else if (userPassword.value === "password" || userPassword.value === "Password") {
//     errorMessages.push("Password cannot be 'password'");
//   }

//   if (userName.value === "" && userPassword.value === "") {
//     errorMessages.push("Fields cannot be blank");
//   } else if (userName.value !== logInEmail) {
//     errorMessages.push("Unregistered Email");
//   } else if (userPassword.value !== logInPassword) {
//     errorMessages.push("Invalid password");
//   } else if (userName.value !== logInEmail || userPassword.value !== logInPassword) {
//     errorMessages.push("Incorrect email or password");
//   }

//   if (errorMessages.length > 0) {
//     e.preventDefault();
//     errMessages.innerText = errorMessages.join(", ");
//     errMessages.style.display = "block";
//   } else {
//     errMessages.innerText = "";
//     errMessages.style.display = "none";
//     successMessage = "Login successful! Redirecting...";
//     sucMessage.innerText = successMessage;
//     setTimeout(function () {
//       window.location.href = homePage;
//     }, 1000);
//   }
// });

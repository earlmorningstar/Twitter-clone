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
const errMessages = document.getElementById("errInfo");
const logInEmail = "earlmorningstar@gmail.com";
const logInPassword = "xclonepassword";
const homePage = "/homePage.html";

logInForm.addEventListener("submit", (e) => {
  let errorMessages = [];

  if (userName.value === "" || userName.value == null) {
    errorMessages.push("Username field cannot be blank");
  }

  if (userPassword.value === "" || userPassword.value == null) {
    errorMessages.push("Input your password");
  }

  if (userPassword.value.length <= 6) {
    errorMessages.push("Password cannot be less than 6 characters");
  }

  if (userPassword.value.length >= 20) {
    errorMessages.push("Password cannot be 20 characters or more");
  }

  if (userPassword.value === "password" || userPassword.value === "Password") {
    errorMessages.push("Password cannot be 'password'");
  }

  if (userName.value !== logInEmail || userPassword.value !== logInPassword) {
    errorMessages.push("Incorrect email or password");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    errMessages.innerText = errorMessages.join(", ");
    errMessages.style.display = "block";
  } else {
    errMessages.innerText = "";
    errMessages.style.display = "none";
    errorMessages = [];
    e.preventDefault();
    window.location.href = homePage;
    // logInForm.submit();
  }
});

// -----SIGN IN PURE JS END HERE-----

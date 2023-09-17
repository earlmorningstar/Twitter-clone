// const textArea = document.getElementById("post-desk");

// textArea.addEventListener("input", ()=> {
//     textArea.classList.add("no-outline");
// })

// const forYouClick = document.querySelector('#for-you');
// const followingClick = document.querySelector('#following');

// document.addEventListener("DOMContentLoaded", function () {
//     // Get all feed-option elements
//     let feedOptions = document.querySelectorAll(".feed-option");

//     // Add a click event listener to each feed-option element
//     feedOptions.forEach(function (option) {
//         option.addEventListener("click", function () {
//             // Remove 'active' class from all feed-options
//             feedOptions.forEach(function (opt) {
//                 opt.classList.remove("active");
//             });

//             // Add 'active' class to the clicked feed-option
//             this.classList.add("active");

//             // Get the target data attribute (either "for-you" or "following")
//             let target = this.getAttribute("data-target");

//             // Hide all post containers
//             let postContainers = document.querySelectorAll(".for-you-post-container, .following-post-container");
//             postContainers.forEach(function (container) {
//                 container.style.display = "none";
//             });

//             // Show the post container corresponding to the clicked option
//             let selectedContainer = document.querySelector("." + target + "-post-container");
//             if (selectedContainer) {
//                 selectedContainer.style.display = "block";
//             }
//         });
//     });

//     // Initially, trigger a click on the "For you" span to display its content
//     let forYouOption = document.querySelector(".feed-option[data-target='for-you']");
//     if (forYouOption) {
//         forYouOption.click();
//     }
// });

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

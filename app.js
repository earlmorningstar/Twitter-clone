// const textArea = document.getElementById("post-desk");

// textArea.addEventListener("input", ()=> {
//     textArea.classList.add("no-outline");
// })

// const forYouClick = document.querySelector('#for-you');
// const followingClick = document.querySelector('#following');



document.addEventListener("DOMContentLoaded", function () {
    // Get all feed-option elements
    let feedOptions = document.querySelectorAll(".feed-option");

    // Add a click event listener to each feed-option element
    feedOptions.forEach(function (option) {
        option.addEventListener("click", function () {
            // Remove 'active' class from all feed-options
            feedOptions.forEach(function (opt) {
                opt.classList.remove("active");
            });

            // Add 'active' class to the clicked feed-option
            this.classList.add("active");

            // Get the target data attribute (either "for-you" or "following")
            let target = this.getAttribute("data-target");

            // Hide all post containers
            let postContainers = document.querySelectorAll(".for-you-post-container, .following-post-container");
            postContainers.forEach(function (container) {
                container.style.display = "none";
            });

            // Show the post container corresponding to the clicked option
            let selectedContainer = document.querySelector("." + target + "-post-container");
            if (selectedContainer) {
                selectedContainer.style.display = "block";
            }
        });
    });

    // Initially, trigger a click on the "For you" span to display its content
    let forYouOption = document.querySelector(".feed-option[data-target='for-you']");
    if (forYouOption) {
        forYouOption.click();
    }
});


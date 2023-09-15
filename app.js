// const textArea = document.getElementById("post-desk");

// textArea.addEventListener("input", ()=> {
//     textArea.classList.add("no-outline");
// })

// const forYouClick = document.querySelector('#for-you');
// const followingClick = document.querySelector('#following');





// $(document).ready(function() {
//     // Add a click event listener to the .feed-option spans
//     $('.feed-option').click(function() {
//         // Remove the 'active' class from all feed-options
//         $('.feed-option').removeClass('active');
        
//         // Add the 'active' class to the clicked feed-option
//         $(this).addClass('active');
        
//         // Get the target data attribute (either "for-you" or "following")
//         var target = $(this).data('target');
        
//         // Hide all post containers
//         $('.for-you-post-container, .following-post-container').hide();
        
//         // Show the post container corresponding to the clicked option
//         $('.' + target + '-post-container').show();
//     });
    
//     // Initially, trigger a click on the "For you" span to display its content
//     $('.feed-option[data-target="for-you"]').click();
// });


document.addEventListener("DOMContentLoaded", function () {
    // Get all feed-option elements
    var feedOptions = document.querySelectorAll(".feed-option");

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
            var target = this.getAttribute("data-target");

            // Hide all post containers
            var postContainers = document.querySelectorAll(".for-you-post-container, .following-post-container");
            postContainers.forEach(function (container) {
                container.style.display = "none";
            });

            // Show the post container corresponding to the clicked option
            var selectedContainer = document.querySelector("." + target + "-post-container");
            if (selectedContainer) {
                selectedContainer.style.display = "block";
            }
        });
    });

    // Initially, trigger a click on the "For you" span to display its content
    var forYouOption = document.querySelector(".feed-option[data-target='for-you']");
    if (forYouOption) {
        forYouOption.click();
    }
});

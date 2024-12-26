document.getElementById("recommendations-link").addEventListener("click", function (event) {
    const recommendationSection = document.getElementById("recommendations");
    if (recommendationSection) {
        event.preventDefault(); // Prevent default behavior
        recommendationSection.classList.toggle("visible"); // Toggle the visibility class
        recommendationSection.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
    }
});

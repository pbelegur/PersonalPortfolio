document.getElementById("recommendations-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const recommendationSection = document.getElementById("recommendations");
    if (recommendationSection) {
        if (recommendationSection.classList.contains("hidden")) {
            recommendationSection.classList.remove("hidden");
            recommendationSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
        } else {
            recommendationSection.classList.add("hidden");
        }
    }
});

function scrollToNextSection(currentSectionId) {
    const currentSection = document.getElementById(currentSectionId);
    if (currentSection) {
        let nextSection = currentSection.nextElementSibling;
        while (nextSection && !nextSection.classList.contains('section')) {
            nextSection = nextSection.nextElementSibling;
        }
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('No more sections to scroll to.');
        }
    } else {
        console.error(`Section with id "${currentSectionId}" not found.`);
    }
}


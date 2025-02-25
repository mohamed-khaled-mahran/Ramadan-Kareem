let sections = document.querySelectorAll(".section");
let currentIndex = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        section.classList.remove("active");
        section.style.transform = i === index ? "rotateY(0)" : "rotateY(180deg)";
    });
    sections[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSection(currentIndex);
});

// Show the first section by default
showSection(currentIndex);

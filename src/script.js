const showMoreButton = document.getElementById("show-more-button");
const formSection = document.getElementById("form-section");
let isOpen = false;

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const error = document.getElementById("error");

showMoreButton.addEventListener('click', () => {
    formSection.style.display = isOpen ? "none" : "block";
    showMoreButton.innerText = isOpen ? "Show More" : "Show Less";
    isOpen = !isOpen;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value.trim().length === 0) {
        error.textContent = "Name is required";
        return;
    }

    error.textContent = "";
    alert("Form submitted successfully");
});

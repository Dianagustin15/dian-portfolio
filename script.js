// ==============================
// Navigation
// ==============================

const navName = document.querySelector("#nav-name");
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul a");

navName.textContent = "Dian | Web Developer";

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "Close";
    } else {
        menuBtn.textContent = "Menu";
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.textContent = "Menu";
    });
});


// ==============================
// Contact Form
// ==============================

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#form-message");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.classList.remove("success");
        formMessage.classList.add("error");

        return;
    }

    if (!isValidEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.classList.remove("success");
        formMessage.classList.add("error");

        return;
    }

    const formData = {
        name,
        email,
        message
    };

    console.log(formData);

    formMessage.textContent = "Message sent successfully!";
    formMessage.classList.remove("error");
    formMessage.classList.add("success");

    contactForm.reset();
});


// ==============================
// Skills Data
// ==============================

const skills = [
    {
        name: "HTML",
        description: "Building semantic and accessible web structure.",
        level: 3
    },
    {
        name: "CSS",
        description: "Creating responsive and user-friendly layouts.",
        level: 3
    },
    {
        name: "JavaScript",
        description: "Learning programming logic and web interactivity.",
        level: 2
    },
    {
        name: "Git & GitHub",
        description: "Tracking changes and managing my code.",
        level: 2
    },
    {
        name: "DOM",
        description: "Creating interactive web experiences.",
        level: 2
    },
    {
        name: "API / Fetch",
        description: "Working with external data.",
        level: 1
    }
];


// ==============================
// Skills Elements
// ==============================

const skillsContainer = document.querySelector("#skills-container");
const allBtn = document.querySelector("#all-btn");
const intermediateBtn = document.querySelector("#intermediate-btn");
const beginnerBtn = document.querySelector("#beginner-btn");


// ==============================
// Skills Helpers
// ==============================

function getLevelText(level) {
    if (level === 4) {
        return "Advanced";
    }

    if (level === 3) {
        return "Intermediate";
    }

    return "Beginner";
}

function setActiveButton(activeButton) {
    allBtn.classList.remove("active");
    intermediateBtn.classList.remove("active");
    beginnerBtn.classList.remove("active");

    activeButton.classList.add("active");
}


// ==============================
// Render Skills
// ==============================

function renderSkills(skillList) {
    skillsContainer.innerHTML = "";

    skillList.forEach((skill) => {
        const card = document.createElement("article");
        card.classList.add("skill-card");

        const heading = document.createElement("h3");
        heading.textContent = skill.name;

        const description = document.createElement("p");
        description.textContent = skill.description;

        const level = document.createElement("p");
        level.textContent = `Level: ${skill.level}/4 - ${getLevelText(skill.level)}`;

        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(level);

        skillsContainer.appendChild(card);
    });
}


// ==============================
// Skills Filters
// ==============================

allBtn.addEventListener("click", () => {
    renderSkills(skills);
    setActiveButton(allBtn);
});

intermediateBtn.addEventListener("click", () => {
    const filteredSkills = skills.filter((skill) => {
        return skill.level >= 3;
    });

    renderSkills(filteredSkills);
    setActiveButton(intermediateBtn);
});

beginnerBtn.addEventListener("click", () => {
    const filteredSkills = skills.filter((skill) => {
        return skill.level <= 2;
    });

    renderSkills(filteredSkills);
    setActiveButton(beginnerBtn);
});


// ==============================
// Initial State
// ==============================

setActiveButton(allBtn);
renderSkills(skills);
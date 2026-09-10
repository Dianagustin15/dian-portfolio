const navName = document.querySelector("#nav-name");

navName.textContent = "Dian | Web Developer";

const projectsBtn = document.querySelector("#projects-btn");

projectsBtn.addEventListener("click", () => {
    projectsBtn.textContent = "Opening Projects...";
});

const githubLink = document.querySelector("#github-link");

githubLink.addEventListener("click", () => {
    githubLink.textContent = "GitHub Coming Soon";
});

const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "Close";
    } else {
        menuBtn.textContent = "Menu";
    }
});

const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.textContent = "Menu";
    });
});

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

    const formData = {
    name: name,
    email: email,
    message: message
    };

    console.log(formData);

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";

        formMessage.classList.add("error");
        formMessage.classList.remove("success");

        return;
    }

    if (!isValidEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";

        formMessage.classList.add("error");
        formMessage.classList.remove("success");

        return;
    }

    formMessage.textContent = "Message sent successfully!";

    formMessage.classList.add("success");
    formMessage.classList.remove("error");

    contactForm.reset();
});

function calculateTotal(price, quantity) {
    return price * quantity;
}

let result = calculateTotal(10000, 3);

console.log(result);

let skillss = ["HTML", "CSS", "JavaScript"];

skillss.forEach((skill) => {
    console.log("i know " + skill);
});

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
    }
];

function getLevelText(level) {
    if (level === 4) {
        return "Advanced";
    } else if (level === 3) {
        return "Intermediate";
    } else {
        return "Beginner";
    }
}

const skillsContainer = document.querySelector("#skills-container");
const allBtn = document.querySelector("#all-btn");
const intermediateBtn = document.querySelector("#intermediate-btn");
const beginnerBtn = document.querySelector("#beginner-btn");

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

allBtn.addEventListener("click", () => {
    renderSkills(skills);
});

intermediateBtn.addEventListener("click", () => {
    const filteredSkills = skills.filter((skill) => {
        return skill.level >= 3;
    });

    renderSkills(filteredSkills);
});

beginnerBtn.addEventListener("click", () => {
    const filteredSkills = skills.filter((skill) => {
        return skill.level <= 2;
    });

    renderSkills(filteredSkills);
});
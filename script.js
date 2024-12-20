const content = [
    {
        title: "Large-Scale Government Contract Works",
        image: "images/government-work.jpg",
        description: "VSP Infra Projects has been actively involved in large-scale government infrastructure projects across India. These projects include the construction of highways, bridges, and public utilities, helping improve connectivity and urban infrastructure. Our projects are known for meeting the highest quality standards, ensuring efficient execution while adhering to stringent government regulations."
    },
    {
        title: "Corporate Infrastructure Development",
        image: "images/corporate.jpg",
        description: "We specialize in developing cutting-edge corporate infrastructure, including office complexes, IT parks, and industrial hubs. In India, we have worked on projects that cater to global companies, integrating modern design with sustainability. These projects are tailored to meet the evolving needs of businesses and contribute to economic growth by creating efficient and future-ready workspaces."
    },
    {
        title: "Real Estate Ventures",
        image: "images/real-estate.jpg",
        description: "VSP Infra Projects has undertaken several real estate ventures in key urban centers of India. Our portfolio includes luxury residential complexes, mixed-use developments, and affordable housing projects. We aim to create spaces that foster community growth, while ensuring sustainability and comfort for the residents. Our projects are designed to blend modern amenities with environmental consciousness."
    },
    {
        title: "Office & Residential Complex Construction",
        image: "images/residential.jpg",
        description: "With a strong focus on both office and residential spaces, VSP Infra Projects has been instrumental in constructing world-class commercial towers and luxury residential complexes in major cities like Mumbai, Delhi, and Bengaluru. These developments are designed with a strong emphasis on aesthetics, comfort, and energy efficiency, creating environments where businesses and families can thrive."
    }
];

const dynamicSection = document.getElementById("dynamic-content");

content.forEach(item => {
    const section = document.createElement("div");
    section.className = "dynamic-section";
    section.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        </div>
    `;
    dynamicSection.appendChild(section);
});

// Our Work Gallery
const projects = [{ title: "Highway Construction", image: "images/highway.jpg" }, { title: "Commercial Towers", image: "images/commercial.jpg" }, { title: "Smart City Projects", image: "images/smart-city.jpg" }, { title: "Irrigation Works", image: "images/irrigation.jpg" }];

const projectGallery = document.getElementById("projects");
projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
    `;
    projectGallery.appendChild(projectDiv);
});

// Add fade-in animations to sections when they scroll into view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".dynamic-section, .project");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const images = Array.from(track.children);
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const imageWidth = images[0].getBoundingClientRect().width;
    let currentIndex = 0;

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    const goToNext = () => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to start
        updateCarousel();
    };

    const goToPrev = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to end
        updateCarousel();
    };

    // Add button functionality
    nextButton.addEventListener("click", goToNext);
    prevButton.addEventListener("click", goToPrev);

    // Auto-scroll every 2 seconds
    setInterval(goToNext, 2000);
});

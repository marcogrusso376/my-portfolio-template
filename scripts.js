
fetch("./header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load header.html");
        }

        return response.text();
    })
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);

        const header = document.querySelector("header");

        function updateHeader() {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

        updateHeader();
    })
    .catch(error => console.error("Navbar error:", error));


    
/* Enlarge a project image when clicked */

document.querySelectorAll(".carousel-track img").forEach((img) => {
    img.addEventListener("click", () => {
        const carousel = img.closest(".carousel");
        const track = carousel.querySelector(".carousel-track");

        // Pause this carousel
        track.style.animationPlayState = "paused";

        // Create image overlay
        const overlay = document.createElement("div");
        overlay.className = "image-overlay";

        const largeImage = document.createElement("img");
        largeImage.src = img.src;
        largeImage.alt = img.alt;

        const closeButton = document.createElement("button");
        closeButton.className = "image-overlay-close";
        closeButton.textContent = "×";
        closeButton.setAttribute("aria-label", "Close enlarged image");

        overlay.append(closeButton, largeImage);
        document.body.appendChild(overlay);

        function closeOverlay() {
            overlay.remove();
            track.style.animationPlayState = "";
        }

        closeButton.addEventListener("click", closeOverlay);

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeOverlay();
            }
        });

        document.addEventListener("keydown", function handleEscape(event) {
            if (event.key === "Escape") {
                closeOverlay();
                document.removeEventListener("keydown", handleEscape);
            }
        });
    });
});


const aboutSection = document.querySelector(".about-section");

if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible");
                aboutObserver.unobserve(aboutSection);
            }
        });
    }, {
        threshold: 0.2
    });

    aboutObserver.observe(aboutSection);
}

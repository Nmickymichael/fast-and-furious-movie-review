document.addEventListener("DOMContentLoaded", function () {
    // Fade-in cards as they enter the viewport
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    if ("IntersectionObserver" in window) {
        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            });
        }, appearOptions);

        faders.forEach(fader => appearOnScroll.observe(fader));
    } else {
        // Fallback for browsers without IntersectionObserver
        faders.forEach(fader => {
            fader.style.opacity = "1";
            fader.style.transform = "translateY(0)";
        });
    }

    // Generate animated background stars
    const starsContainer = document.querySelector(".stars");

    if (starsContainer) {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            const size = Math.random() * 2;

            star.className = "star";
            star.style.width = size + "px";
            star.style.height = size + "px";
            star.style.top = Math.random() * 100 + "%";
            star.style.left = Math.random() * 100 + "%";
            star.style.animationDuration = (Math.random() * 20 + 30) + "s";

            starsContainer.appendChild(star);
        }
    }
});

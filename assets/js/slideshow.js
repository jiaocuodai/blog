function createSlideshow(containerId, { images, caption }) {
    const container = document.getElementById(containerId);

    const figure = document.createElement("figure");
    figure.className = "slideshow";

    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Slide ${index+1}`;
        if (index === 0) img.classList.add("active");
        figure.appendChild(img);
    });

    const prevBtn = document.createElement("button");
    prevBtn.className = "slideshow-btn prev";
    prevBtn.innerHTML = "&#10094;";

    const nextBtn = document.createElement("button");
    nextBtn.className = "slideshow-btn next";
    nextBtn.innerHTML = "&#10095;";

    figure.appendChild(prevBtn);
    figure.appendChild(nextBtn);

    if (caption) {
        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = caption;
        figure.appendChild(figcaption);
    }

    container.appendChild(figure);

    const slides = figure.querySelectorAll("img");
    let current = 0;

    function showSlide(index) {
        slides.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });
}

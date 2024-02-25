const images = document.querySelectorAll('[data-src]');
const options = {
    rootMargin: '0px',
};

function IntersectionHandle(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        };
    });
};

const observer = new IntersectionObserver(IntersectionHandle, options);

images.forEach(image => {
    observer.observe(image);
});
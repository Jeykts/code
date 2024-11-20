
const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}
function toggleSearchBar() {
        const searchBar = document.getElementById('search-bar');
        
        // Alternar la clase 'hidden'
        searchBar.classList.toggle('lg:hidden');
    }


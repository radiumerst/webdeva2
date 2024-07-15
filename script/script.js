// Scroll to top of screen
function scrollToTop() {
    window.scrollTo({
        top: 0
    });
}

// Scroll to top of screen (smooth)
function scrollToTopSmooth() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Page changer
function showSubpage(subpageId) {
    // Hide all pages
    var subpages = document.querySelectorAll('.subpage');
    subpages.forEach(function(subpage) {
        subpage.style.display = 'none';
    });

    // Show only selected page
    var selectedSubpage = document.getElementById(subpageId);
    selectedSubpage.style.display = 'block';
    scrollToTop();
}

document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showSubpage('home');

    // Show navbar only when user has scrolled down
    const headerDiv = document.getElementById('navBar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            headerDiv.classList.add('show');
        } else {
            headerDiv.classList.remove('show');
        }
    });

    // Photo Gallery
    const gallery = document.getElementById('gallery');
    const scrollLeftBtn = document.getElementById('galleryLeftBtn');
    const scrollRightBtn = document.getElementById('galleryRightBtn');
    const images = gallery.getElementsByTagName('img');
    const imageCount = images.length;
    let currentIndex = 0;

    function updateGalleryPosition() {
        const imageWidth = images[0].clientWidth + 10; // Include margin-right
        gallery.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    scrollLeftBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        updateGalleryPosition();
    });

    scrollRightBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % imageCount;
        updateGalleryPosition();
    });

    // Initialize gallery position
    updateGalleryPosition();
});
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
    const indicatorsContainer = document.getElementById('indicators');
    const images = gallery.getElementsByTagName('img');
    const imageCount = images.length;
    let currentIndex = 0;
    const autoScrollInterval = 3000; // Interval in milliseconds
    let autoScrollTimer;

    // Create indicators
    for (let i = 0; i < imageCount; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === currentIndex) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    }

    const indicators = indicatorsContainer.getElementsByClassName('indicator');

    function updateGalleryPosition() {
        const imageWidth = images[0].clientWidth + 10;
        gallery.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

        // Update indicators
        for (let i = 0; i < indicators.length; i++) {
            if (i === currentIndex) {
                indicators[i].classList.add('active');
            } else {
                indicators[i].classList.remove('active');
            }
        }
    }

    function scrollRight() {
        currentIndex = (currentIndex + 1) % imageCount;
        updateGalleryPosition();
    }

    function scrollLeft() {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        updateGalleryPosition();
    }

    function resetAutoScrollTimer() {
        clearInterval(autoScrollTimer);
        autoScrollTimer = setInterval(scrollRight, autoScrollInterval);
    }

    scrollLeftBtn.addEventListener('click', function() {
        scrollLeft();
        resetAutoScrollTimer();
    });

    scrollRightBtn.addEventListener('click', function() {
        scrollRight();
        resetAutoScrollTimer();
    });

    // Initialize auto-scroll
    autoScrollTimer = setInterval(scrollRight, autoScrollInterval);

    // Initialize gallery position
    updateGalleryPosition();
});
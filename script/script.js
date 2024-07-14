function showSubpage(subpageId) {
    var subpages = document.querySelectorAll('.subpage');
    subpages.forEach(function(subpage) {
        subpage.style.display = 'none';
    });

    var selectedSubpage = document.getElementById(subpageId);
    selectedSubpage.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    showSubpage('home');
});
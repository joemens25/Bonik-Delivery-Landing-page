const stars = document.querySelectorAll('.rating input');
stars.forEach(star => {
    star.addEventListener('change', () => {
        const ratingValue = star.id.replace('star', '');
        alert(`You rated ${ratingValue} star${ratingValue > 1 ? 's' : ''}`);
    });
});

function toggleMenu(){
    const menubar = document.getElementById("navlinks");
    menubar.style.display = menubar.style.display === "flex" ? "none" : "flex";
}
/**
 * Generates random star coordinates for the background.
 * @param {number} count - The number of stars to create.
 */
function generateStars(count) {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    let boxShadowString = "";

    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        
        boxShadowString += `${x}vw ${y}vh #FFF`;
        
        if (i < count - 1) {
            boxShadowString += ", ";
        }
    }

    starsContainer.style.boxShadow = boxShadowString;
}

// Initialize stars when the script loads
// 500 stars provides a dense field for "Nezars Gamelab"
generateStars(1000);

/**
 * Loads a page into the shell iframe and ensures it fills the container.
 */
function loadPage(url) {
    const shell = document.getElementById('content-shell');
    if (!shell) return;

    // Change the source
    shell.src = url;

    // Force the iframe to fill the available space
    shell.style.width = "100%";
    shell.style.height = "100%";

    // Scroll to top
    window.scrollTo(0, 0);
}
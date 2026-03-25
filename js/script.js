/**
 * Generates random star coordinates for the background.
 * This function creates a string of box-shadow values to simulate stars at random positions across the viewport.
 * The stars are generated within a 100vw by 100vh area, and the count parameter determines how many stars to create.
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
// 1000 stars are loaded at all times within the background
generateStars(1000);

/**
 * Loads a page into the Master IFrame and ensures it fills the container.
 * This function is called whenever any button is clicked using the loadpage callback in the HTML. 
 * It takes a URL as an argument, sets it as the source of the IFrame, and adjusts the IFrame's dimensions to fill the 
 * available space. Additionally, it scrolls the window to the top to ensure the newly loaded content is visible immediately.
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
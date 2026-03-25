/*
 * Takes the game ID from the URL query parameters and loads the corresponding game into the IFrame on the game.html page.
 * The game ID is expected to match a folder name within the "games" directory, which contains an index.html file for the game.
 * If the game ID or IFrame container is missing, an error message is logged to the console for debugging purposes.
 */
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('game');
const gameFrame = document.getElementById('unity-iframe');

console.log("Gameloader active. Found Game ID:", gameId);

if (gameId && gameFrame) {

    // This points to folder with the corresponding game name within the file structure. 
    // Each game folder contains an index.html file which is passed through into the IFrame.
    const path = `games/${gameId}/index.html`;
    console.log("Loading game from:", path);
    gameFrame.src = path;

} else {

    // If any issues arise with loading the game, such as a missing game ID or IFrame container, an error message is 
    // logged to the console for debugging purposes.
    console.error("Game ID or Iframe container missing!");
}
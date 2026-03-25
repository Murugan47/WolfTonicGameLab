const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('game');
const gameFrame = document.getElementById('unity-iframe');

console.log("Gameloader active. Found Game ID:", gameId);

if (gameId && gameFrame) {
    // This points to games/HockeyPhysics/index.html
    const path = `games/${gameId}/index.html`;
    console.log("Loading game from:", path);
    gameFrame.src = path;
} else {
    console.error("Game ID or Iframe container missing!");
}
# WolfTonicGameLab

Portfolio website to actively demonstrate my projects and skills.

[![Play Demo](https://img.shields.io/badge/Demo-Click_here-brightgreen)](https://wolftonicstudio.com/)

## 🚀 About the Gamelab
The Gamelab is a **Web-based Game Portfolio** designed to host and launch multiple Unity-developed projects from a single, cohesive interface. It serves as a personal digital arcade and technical showcase of self-taught projects within Unity and Web Development. Instead of navigating between different sites, users can explore various technical experiments—such as physics simulations and arcade-style games—all within one unified environment.

## 🛠️ How It Works
The website operates by manipulating a **Master IFrame** to autoload all architecture files:

* **The Hub**: The main gallery uses a **Modern CSS Grid** layout, ensuring "game cards" automatically organize themselves in a table-styled format.
* **Static Limitation Work-Around** the lack of ability to host a non-static website on GitHub Pages. Lead to a clever work around to have individual cards, and load them actively using nested i-frames. This allows same page loading of different projects, without the need to reload pages multiple times for different pages
* **Accessibility**: The layout allows for tabbing through each button for easy access and navigation.
* **The Integration**: Games are compiled using **Unity WebGL** and loaded dynamically using the master IFrame.
* **Aspect Ratio Management**: The WebGL-based index files are manually manipulated to inherit the main layout's aspect ratio.
* **Easy Scalability**: To maintain quality, new games can be added within the `home.html` file using basic references and stylized buttons, ensuring seamless integration.

## 💻 Technical Implementation
Building this platform required a blend of software engineering and web development:

* **Platform Architecture**: Developed the frontend using **HTML5, CSS, and JavaScript** with a responsive grid and IFrame system.
* **Godot Optimization**: Managed the export and configuration of the projects, optimizing them for optimal and fine-tuned experience
* **Unity Optimization**: Managed the export and configuration of several projects, optimizing them for web performance and manually adjusting files to work within the web environment.
* **Custom UI/UX**: Designed the "Game Card" interface with interactive hover effects and built-in accessibility features.
* **Responsive Logic**: Wrote custom JavaScript and CSS wrappers to allow games to appear seamlessly on the same webpage without requiring any reloading.
* **Coding Variety** Multiple projects of several programming languages all hosted and setup properly to be handled within the web

## 🕹️ Featured Projects
This lab features a variety of simulations developed using self-taught skills:

* **BeatMeUp**: A kick the buddy inspired sandbox game. Beat the buddy up using all the tools/weapons included!
* **Questionable (Currently down, API is deprecated)**: A react/vite multiplayer game using socket.io with AI integration. Ask questions and try to figure out what word the AI is thinking of.
* **Reel That Fish!**: A data-driven fishing simulator.
* **Hockey Physics**: A simulation focused on collision and movement logic.
* **Double Pendulum Sim**: A technical physics experiment.
* **Webtris**: A web-based arcade classic implementation.
* **Garden Visualizer**: A specialized visual tool.
* **Typey Bird**: A fast-paced typing-based game.

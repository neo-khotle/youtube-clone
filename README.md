# YouTube Clone

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success?style=for-the-badge)

A responsive YouTube-inspired homepage built using **HTML5, CSS3, and Vanilla JavaScript**. This project recreates the look and feel of YouTube's desktop, tablet, and mobile interfaces while showcasing responsive design, modern CSS layouts, and interactive JavaScript features.

Developed as part of my front-end development journey, this project focuses on writing clean, maintainable code and creating a user experience that closely resembles the original YouTube interface.

---

## Live Demo

**Coming Soon** – This project will be deployed using GitHub Pages.

---

## Repository

GitHub Repository:

**https://github.com/neo-khotle/youtube-clone**

---

## Features

* Responsive desktop, tablet, and mobile layouts
* Sticky navigation bar
* Desktop sidebar with collapsible icon-only navigation
* Infinite scrolling with progressive loading (9 videos initially, then 3 at a time)
* Hover video previews on desktop
* Video duration badges
* Responsive search bar
* Material Icons integration
* Sidebar navigation sections
* CSS Flexbox and Grid layouts
* Smooth transitions and animations
* Semantic HTML structure
* Accessible sidebar toggle button

---

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Google Fonts (Roboto)
* Google Material Icons

---

## Responsive Design

The application has been designed to provide an optimal viewing experience across different devices.

| Device     | Layout                                                            |
| ---------- | ----------------------------------------------------------------- |
| 💻 Desktop | Full sidebar with collapsible navigation and hover video previews |
| 📱 Tablet  | Two-column responsive video grid                                  |
| 📱 Mobile  | Single-column responsive feed with simplified navigation          |

---

## Project Structure

```text
youtube-clone/
│
├── assets/
│   ├── home.svg
│   ├── shorts.svg
│   ├── music.svg
│   ├── gaming.svg
│   ├── live.svg
│   ├── yt-kids.svg
│   └── ...
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How It Works

### Desktop Sidebar Toggle

On desktop screens (1024px and above), clicking the menu button collapses the sidebar into a compact icon-only navigation rail, allowing more space for the video feed. Tablet and mobile layouts remain unchanged.

### Infinite Scroll

The page initially displays **9 videos**.

As the user scrolls toward the bottom of the feed, **3 additional videos** are progressively revealed until all available videos have been displayed.

### Hover Video Preview

On desktop devices, hovering over a video thumbnail displays a looping preview video, creating an experience similar to YouTube's video preview feature.

---

## Skills Demonstrated

This project demonstrates knowledge of:

* Responsive Web Design
* Mobile-First Principles
* HTML5 Semantic Elements
* CSS Flexbox
* CSS Grid
* Media Queries
* CSS Positioning
* CSS Transitions
* JavaScript DOM Manipulation
* Event Listeners
* Intersection Observer API
* Progressive Content Loading
* User Interface Design
* User Experience Principles

---

## Future Improvements

Potential future enhancements include:

* Search functionality
* JSON-powered video data
* Dynamic video rendering
* Watch page
* Dark mode
* Category filtering
* Local Storage support
* Improved accessibility
* Performance optimization
* Loading skeletons
* Better keyboard navigation

---

## Installation

Clone the repository:

```bash
git clone https://github.com/neo-khotle/youtube-clone.git
```

Navigate into the project folder:

```bash
cd youtube-clone
```

Open `index.html` in your preferred browser.

No build tools, frameworks, or dependencies are required.

---

## Accessibility

This project includes:

* Semantic HTML elements
* Descriptive image alt text
* Accessible sidebar toggle button using ARIA attributes
* Keyboard-focusable interactive elements
* Responsive layouts for improved usability

Additional accessibility improvements are planned for future versions.

---

## What I Learned

Building this project strengthened my understanding of responsive layouts, CSS architecture, JavaScript interactivity, and creating polished user interfaces without relying on frameworks. It also provided practical experience implementing features such as sidebar state management, hover interactions, and progressive content loading while maintaining a clean and organized codebase.

---

## Author

**Neo Khotle**

GitHub: https://github.com/neo-khotle

LinkedIn: https://www.linkedin.com/in/neo-khotle/

---

## License

This project was created for educational and portfolio purposes.

YouTube, its logo, branding, and trademarks are the property of Google LLC. This project is an independent educational recreation and is not affiliated with, sponsored by, or endorsed by Google or YouTube.

---

## Acknowledgements

* YouTube for the original interface inspiration
* Google Fonts
* Google Material Icons
* Zaio Coding Bootcamp

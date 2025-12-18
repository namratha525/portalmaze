portalmaze project
# PortalMaze

PortalMaze is a grid-based teleportation maze puzzle game built as part of the PCON Hackathon.

The objective of the game is to move from the START cell to the GOAL cell using grid-based movement while navigating walls and maze paths.

---

## Game Controls
- Arrow Keys / W A S D: Move the player
- Walls (#) block movement
- Reach the GOAL (G) to finish the maze

---

## Game Modes
1. No-Wall-Break Mode  
   - Player cannot break any walls

2. Wall-Break Mode  
   - Player can break up to K walls

---

## Algorithm Used (Internal Logic)

The game internally uses **Breadth First Search (BFS)** to compute:

1. Shortest valid path from START to GOAL **without breaking any walls**
2. Shortest valid path from START to GOAL **using at most K wall breaks**

These paths are not shown to the player and are used only for validation and scoring purposes.

---

## Tech Stack
- HTML
- CSS
- JavaScript
- GitHub Pages (Deployment)

---

## Live Demo
PASTE_YOUR_GITHUB_PAGES_LINK_HERE

---

## Video Demo
PASTE_YOUR_VIDEO_LINK_HERE

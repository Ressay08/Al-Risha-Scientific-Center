# Al Risha Scientific Center 🌟

**A modern, luxury-styled educational website for mathematics, physics, SVT, and languages.**
Designed to look premium, feel smooth, and convert visitors into inquiries.

[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)

---

## ✨ Features

- **Responsive grid layout** for Courses, Teachers, and Reviews (blocks adapt cleanly on mobile).
- **Courses UI optimized**: cards are **static + flat** (no 3D tilt/flip/drag effects) for better performance and consistency.
- **Smooth navigation**: internal anchor links scroll smoothly and close the mobile menu after selection.
- **Fade-in animations on scroll** using `IntersectionObserver`.
- **Modern form UX**: contact form sends via `formsubmit.co` and redirects to a dedicated thank-you page.
- **Premium visuals**: layered gradients, glassmorphism panels, and carefully tuned shadows.

---

## 🧰 Tech Stack

| Category | Tech |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Behavior | Vanilla JavaScript |
| UI Effects | CSS animations + `IntersectionObserver` |

---

## 🏗️ Architecture / Folder Structure

```txt
risha-website/
├─ index.html
├─ about.html
├─ thanks.html
├─ js/
│  └─ script.js
├─ css/
│  ├─ styles.css
│  └─ about-3d.css
└─ README.md
```

---

## 🚀 Installation & Setup

This project is a static website.

### Option A — Run directly (recommended)
1. Open `index.html` in your browser.
2. Navigate the site normally.

### Option B — Local dev using a simple server
If you want live reload / server behavior:

#### Using VS Code (Live Server)
1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.

#### Using Python (if installed)
```bash
python -m http.server 5500
```
Then open:
- `http://localhost:5500`

---

## 🎨 Design System (Premium Aesthetic)

- **Luxury Dark/Gradient Backdrops**
- **Glassmorphism panels** (blurred, translucent cards)
- **Gold/Neon accents** via gradients and glow-like shadows
- **3D-inspired styling selectively used**, with the **Courses section specifically flattened** for performance.

---

## 📜 License & Credits

© 2019 **Al Risha Scientific Center**. All rights reserved.

This repository is maintained under the project spirit of **[The RessWitchers / Smytk]**.

---

## 🧩 Notes

- The contact form posts to **formsubmit.co** and redirects to `thanks.html`.
- The Courses section is intentionally **static/flat** (no tilt/drag/flip) to ensure consistent visuals across devices.


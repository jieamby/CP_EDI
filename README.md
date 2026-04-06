<!-- PT. Energi Daurulang Indonesia -->
Landing page / company profile website built with **React**, **Vite**, and **Tailwind CSS**.

> A modern, responsive, and lightweight frontend project designed for company profile, service showcase, and business presentation websites.

---

## 🌐 Repository

* **Repository:** https://github.com/jieamby/CP_EDI

> If this project has a live deployment, you can add it here later.

---

## 📖 Table of Contents

* [About The Project](#-about-the-project)
* [Tech Stack](#-tech-stack)
* [Features](#-features)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [Installation](#-installation)
* [Available Scripts](#-available-scripts)
* [Configuration](#-configuration)
* [Usage](#-usage)
* [Deployment](#-deployment)
* [Troubleshooting](#-troubleshooting)
* [Contributing](#-contributing)
* [License](#-license)

---

## 🚀 About The Project

**CP_EDI** is a frontend web project developed as a **company profile / landing page** application.

This project is intended to provide a clean, responsive, and modern interface for presenting:

* Company profile information
* Business services
* Product or solution highlights
* Contact and call-to-action sections
* Corporate branding and identity

Built with **React + Vite** for fast development and optimized performance, and styled using **Tailwind CSS** for scalable and maintainable UI development.

---

## 🛠 Tech Stack

### Core

* **React**
* **Vite**
* **JavaScript**

### Styling

* **Tailwind CSS**
* **PostCSS**

### Code Quality

* **ESLint**

---

## ✨ Features

* Responsive modern layout
* Fast development workflow with Vite
* Reusable React component structure
* Utility-first styling with Tailwind CSS
* Lightweight and optimized frontend architecture
* Easy to customize content, branding, and sections
* Suitable for company profile and service showcase pages

---

## 📁 Project Structure

```bash
CP_EDI/
├── src/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

### Recommended `src/` structure

```bash
src/
├── assets/
├── components/
├── pages/
├── layouts/
├── hooks/
├── utils/
├── App.jsx
└── main.jsx
```

> Main application logic and UI components are located inside the `src/` directory.

---

## ⚙️ Getting Started

Before running the project locally, make sure you have:

* **Node.js** v16+ (recommended: **v18+**)
* **npm** (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

---

## 📦 Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/jieamby/CP_EDI.git
cd CP_EDI
npm install
```

---

## ▶️ Available Scripts

### Run development server

```bash
npm run dev
```

Starts the Vite development server (usually at):

```bash
http://localhost:5173
```

---

### Build for production

```bash
npm run build
```

Creates an optimized production build.

---

### Preview production build

```bash
npm run preview
```

Runs a local preview of the production build.

---

### Run lint

```bash
npm run lint
```

Checks the codebase for linting issues.

> Available scripts may vary slightly depending on the current `package.json` configuration.

---

## 🔧 Configuration

### Tailwind CSS

Tailwind is configured via:

```bash
tailwind.config.js
```

Make sure Tailwind directives are included in your main stylesheet (commonly in `src/index.css` or `src/main.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### PostCSS

PostCSS is configured in:

```bash
postcss.config.js
```

This enables Tailwind CSS processing and CSS optimization during development and production builds.

---

### Vite

Vite configuration is located in:

```bash
vite.config.js
```

This file controls:

* Development server behavior
* Plugin integration
* Build optimizations
* Path aliases (if configured)

---

## 🧑‍💻 Usage

### 1. Start local development

```bash
npm run dev
```

### 2. Edit the project inside `src/`

Customize sections such as:

* Hero / Banner
* About
* Services
* Company Profile
* Contact
* Footer

### 3. Replace branding assets

Update:

* Project branding
* Logo
* Headline / tagline
* Description text
* CTA buttons
* Images / illustrations
* Contact details
* Social media links

### 4. Build before deployment

```bash
npm run build
```

---

## 🌍 Deployment

This project is suitable for static hosting platforms such as:

* **Netlify**
* **Vercel**
* **GitHub Pages** (with additional setup)
* **Firebase Hosting**
* **cPanel static hosting**

---

### Netlify Deployment

Recommended settings:

* **Build Command**

```bash
npm run build
```

* **Publish Directory**

```bash
dist
```

---

### Vercel Deployment

If deploying to Vercel:

* **Framework Preset:** Vite
* **Build Command:**

```bash
npm run build
```

* **Output Directory:**

```bash
dist
```

---

## 🐛 Troubleshooting

### Tailwind CSS not applying styles

* Make sure Tailwind directives exist in the main CSS file
* Verify `tailwind.config.js` content paths include your `src` files
* Restart the dev server after changing Tailwind config

Example content path:

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```

---

### Vite dev server not starting

* Ensure dependencies are installed correctly:

```bash
npm install
```

* Check Node.js version compatibility
* Remove `node_modules` and reinstall if needed:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Build failed on deployment

* Confirm build output folder is set to `dist`
* Ensure all import paths are valid
* Check for case-sensitive file path issues on Linux hosting

---

## 🤝 Contributing

Contributions are welcome.

### Steps

1. Fork this repository
2. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes

```bash
git commit -m "Add: your feature description"
```

4. Push your branch

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request

---

## 📄 License

This project currently does **not** specify a license.

If you want to make it open source, consider adding one of the following:

* **MIT License**
* **Apache 2.0**
* **GPL-3.0**

Example:

```md
MIT License
```

---

## 👤 Author

Developed by **jieamby**

* GitHub: https://github.com/jieamby

---

## ⭐ Support

If you find this project useful, consider giving it a **star** on GitHub ⭐

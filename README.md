# Deveb.co - Interactive 3D Landing Page

A visually engaging, modern landing page featuring an interactive 3D WebGL background and smooth scroll animations. Built with a focus on design, development, and branding aesthetics.

## 🚀 Features

- **3D WebGL Animation**: An animated icosahedron rendered using **Three.js** with custom vertex and fragment shaders (`vite-plugin-glsl`).
- **Scroll-Driven Animations**: Uses **GSAP** and **ScrollTrigger** to orchestrate complex animations tied to the user's scroll position. As you scroll, the 3D object moves, changes color, and typography fades in/out.
- **Smooth Scrolling**: Implements **Locomotive Scroll** for a premium, buttery-smooth scrolling experience.
- **Modern Styling**: Styled with **Tailwind CSS** for rapid, responsive UI development.
- **Fast Build Tool**: Powered by **Vite** for lightning-fast HMR and optimized production builds.

## 🛠️ Technologies Used

- [Three.js](https://threejs.org/) - 3D library
- [GSAP (GreenSock)](https://gsap.com/) - Animation library (ScrollTrigger)
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) - Smooth scrolling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Frontend tooling

## 📦 Installation & Setup

1. **Clone the repository** (if applicable) or download the source code.
2. **Navigate to the project directory**:
   ```bash
   cd Deveb.co
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
   This will start the Vite development server. Open the provided `localhost` link in your browser to view the project.

## 🏗️ Build for Production

To create a production-ready build:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder. You can preview the production build locally using `npm run preview`.

## 📂 Project Structure

- `index.html` - Main HTML structure and Tailwind classes.
- `main.js` - Core JavaScript logic, Three.js scene setup, and GSAP animations.
- `shaders/` - Contains the custom GLSL shaders (`vertexShader.glsl`, `fragmentShader.glsl`) for the 3D object.
- `style.css` - Custom CSS overrides (if any).
- `tailwind.config.js` - Tailwind configuration.
- `vite.config.js` - Vite configuration (includes the GLSL plugin).

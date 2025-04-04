# Jinesh Portfolio

## Project Overview
Jinesh Portfolio is a modern, interactive personal website built to showcase my skills, projects, and professional experiences. This portfolio leverages cutting-edge web technologies to provide an engaging user experience with smooth animations and responsive design.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Form Handling**: EmailJS
- **UI Components**: Lucide React
- **Notifications**: React Hot Toast
- **Smooth Scrolling**: React Scroll

## Features
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive 3D Elements**: Engaging 3D graphics powered by Three.js
- **Smooth Animations**: Fluid transitions and animations using Framer Motion
- **Contact Form**: Integrated contact form with EmailJS for direct communication
- **Project Showcase**: Dedicated section to display projects with detailed information
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Type Safety**: Full TypeScript support for better code quality and maintainability

## Installation

To install and run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jineshsingatkar/jinesh_portfolio.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd jinesh_portfolio
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your EmailJS configuration:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Usage

1. **Development Server**:
   ```bash
   npm run dev
   ```
   This will start the development server at `http://localhost:5173`

2. **Build for Production**:
   ```bash
   npm run build
   ```
   This will create a production-ready build in the `dist` directory

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```

4. **Lint Code**:
   ```bash
   npm run lint
   ```

## Project Structure
- `src/`: Contains all source code
  - `components/`: Reusable React components
  - `assets/`: Static assets like images and icons
  - `styles/`: Global styles and Tailwind configuration
  - `types/`: TypeScript type definitions
  - `utils/`: Utility functions and helpers

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any inquiries or feedback, please reach out through the contact form on the website.

/* CSS Variables */
:root {
  --bg: #020617;
  --card: rgba(15, 23, 42, 0.8);
  --text: #e5e7eb;
  --muted: #94a3b8;
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --border: #1f2937;
  --accent: #6366f1;
}

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, #0f172a, #020617);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
}

/* ==================================================
   Header & Navigation
   ================================================== */

header {
  position: sticky;
  top: 0;
  background: rgba(2, 6, 23, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 800;
  font-size: 1.1rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

/* Underline effect on hover/active */
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.active {
  color: var(--primary);
}

.nav-links a.active::after {
  width: 100%;
}

/* Hamburger menu for mobile */
.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 4px;
}

.mobile-toggle span {
  width: 25px;
  height: 2px;
  background: var(--text);
  transition: all 0.3s ease;
}

/* ==================================================
   Section Base Styles
   ================================================== */

section {
  max-width: 1200px;
  margin: auto;
  padding: 7rem 2rem;
  text-align: center;
}

section h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text), var(--muted));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-desc {
  margin-bottom: 4rem;
  color: var(--muted);
  font-size: 1.1rem;
}

/* ==================================================
   Hero Section
   ================================================== */

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  margin-top: -70px;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto;
}

.badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.hero h1 {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero h1 span {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: var(--muted);
  font-size: 1.3rem;
  margin-top: 1rem;
}

.buttons {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ==================================================
   Buttons
   ================================================== */

.btn {
  padding: 0.9rem 2rem;
  border-radius: 999px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.outline {
  border: 1px solid var(--border);
  color: var(--text);
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(10px);
}

.outline:hover {
  transform: translateY(-3px);
  border-color: var(--primary);
  background: rgba(59, 130, 246, 0.1);
}

/* ==================================================
   Projects Section
   ================================================== */

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: var(--card);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  text-align: left;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

/* Gradient overlay on hover */
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
}

.project-card:hover::before {
  opacity: 1;
}

.project-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.tags {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tags span {
  background: rgba(59, 130, 246, 0.15);
  color: var(--primary);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.project-card p {
  color: var(--muted);
  line-height: 1.6;
  margin: 1rem 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  pointer-events: none;
}

.project-card:hover .project-link {
  color: var(--accent);
  transform: translateX(5px);
}

/* ==================================================
   About Section
   ================================================== */

.about-card {
  background: var(--card);
  padding: 3.5rem;
  border-radius: 24px;
  border: 1px solid var(--border);
  backdrop-filter: blur(10px);
  text-align: center;
  max-width: 800px;
  margin: auto;
}

.about-card p {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.skills-title {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin: 2rem 0;
}

.skills span {
  border: 1px solid var(--border);
  background: rgba(59, 130, 246, 0.05);
  padding: 0.6rem 1.3rem;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.skills span:hover {
  border-color: var(--primary);
  background: rgba(59, 130, 246, 0.15);
  transform: translateY(-3px);
}

.closing {
  margin-top: 2rem;
  font-size: 1.1rem;
  color: var(--text);
  font-weight: 600;
}

/* ==================================================
   Contact Section
   ================================================== */

.contact-form {
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-form input,
.contact-form textarea {
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 1rem 1.2rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button {
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
}

/* Button loading state */
.btn-text {
  display: inline-block;
  transition: opacity 0.3s ease;
}

.btn-loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-form button.loading .btn-text {
  opacity: 0;
}

.contact-form button.loading .btn-loader {
  opacity: 1;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Toast Notification */
.toast {
  position: fixed;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--card);
  border: 1px solid var(--border);
  padding: 1.2rem 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: bottom 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1000;
  min-width: 300px;
  opacity: 0;
  visibility: hidden;
}

.toast.show {
  bottom: 100px;
  opacity: 1;
  visibility: visible;
}

.toast-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toast-icon::before {
  content: '';
  font-size: 1.2rem;
}

.toast.success .toast-icon {
  background: rgba(34, 197, 94, 0.2);
}

.toast.success .toast-icon::before {
  content: '✓';
  color: #22c55e;
}

.toast.error .toast-icon {
  background: rgba(239, 68, 68, 0.2);
}

.toast.error .toast-icon::before {
  content: '✕';
  color: #ef4444;
}

.toast-message {
  color: var(--text);
  font-weight: 500;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
}

.social-links a {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  transition: all 0.3s ease;
}

.social-links a:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(59, 130, 246, 0.3);
}

/* ==================================================
   Footer
   ================================================== */

footer {
  text-align: center;
  padding: 3rem 2rem;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

/* ==================================================
   Responsive Design
   ================================================== */

@media (max-width: 1400px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(2, 6, 23, 0.95);
    backdrop-filter: blur(12px);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--border);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  section {
    padding: 5rem 1.5rem;
  }

  section h2 {
    font-size: 2rem;
  }

  .buttons {
    flex-direction: column;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .about-card {
    padding: 2rem;
  }

  .toast {
    min-width: 280px;
    padding: 1rem 1.5rem;
  }
}

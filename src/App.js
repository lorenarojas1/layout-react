import React, { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './Welcome';
import ContactPage from './Contact';
import AboutUsPage from './AboutUs';
import ProjectsPage from './Projects';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

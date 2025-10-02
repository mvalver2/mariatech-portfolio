import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // <-- import your layout
import ProjectPage from './pages/ProjectPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/mariatech-portfolio">
      <Routes>
        <Route element={<Layout />}>  {/* Layout wraps these routes */}
          <Route path="/" element={<App />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


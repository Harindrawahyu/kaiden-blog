import './App.css'
import { Routes, Route } from 'react-router';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import AllPages from './pages/AllPages';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Resume' element={<ResumePage />} />
        <Route path='/Projects' element={<ProjectsPage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/Test' element={<AllPages />} />
        {/* NOT FOUND */}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

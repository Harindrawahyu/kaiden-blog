import './App.css'
import { Routes, Route } from 'react-router';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        {/* <Route path='/Projects' element={<AboutPage />} />
        <Route path='/Contact' element={<AboutPage />} /> */}

        {/* NOT FOUND */}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

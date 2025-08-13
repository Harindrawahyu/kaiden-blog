import './App.css'
import { Routes, Route } from 'react-router';
import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;

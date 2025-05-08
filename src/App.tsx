import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SongDetails from './pages/SongDetails';
import GenrePage from './pages/GenrePage';
import PopularPage from './pages/PopularPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="song/:id" element={<SongDetails />} />
          <Route path="genres" element={<GenrePage />} />
          <Route path="popular" element={<PopularPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
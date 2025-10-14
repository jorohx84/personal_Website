
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './global.scss';
import Header from './shared/header';
import Footer from './shared/footer';
import Main from './maincontent';
import Imprint from './legallinks/imprint';
import { TranslationProvider } from './services/useTranslation';
import Privacy from './legallinks/privacy';
import { DarkModeProvider } from './services/useDarkmode';
function App() {
  return (
    <DarkModeProvider>
      <TranslationProvider>
        <Router>
          <div className='mainContent'>

            <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/imprint' element={<Imprint />} />
              <Route path='/privacy' element={<Privacy />} />
            </Routes>
            <Footer />
          </div>

        </Router>
      </TranslationProvider>
    </DarkModeProvider>
  );
}

export default App;
import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home';
import Felix20 from './src/pages/Felix20';
import FelixBlender from './src/pages/FelixBlender';
import FelixCreators from './src/pages/FelixCreators';
import FelixStudios from './src/pages/FelixStudios';
import Support from './src/pages/Support';
import About from './src/pages/About';
import NotFound from './src/pages/NotFound';

const App: React.FC = () => {
  return (
    <Theme appearance="light" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/felix-2-0" element={<Felix20 />} />
            <Route path="/felix-ai-for-blender" element={<FelixBlender />} />
            <Route path="/felix-for-creators" element={<FelixCreators />} />
            <Route path="/felix-for-studios" element={<FelixStudios />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
};

export default App;

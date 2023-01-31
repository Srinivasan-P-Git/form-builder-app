import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigate from './routes/navigate/navigate.component';
import FormBuilder from './components/form-builder/form-builder.component';
import ConfigureJson from './components/configure-json/configure-json.component';

import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate />} />
          <Route path="configure-json" element={<ConfigureJson />} />
          <Route path="configure-api" element={null} />
          <Route path="form" element={<FormBuilder />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

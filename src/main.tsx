import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LandCoverLayout } from './components/layout/index.tsx';
import { DataRetrieval } from './components/data-retrieval/index.tsx';
import { DataAssets } from './components/data-assets/index.tsx';

const root = document.getElementById('root')
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/retrieval" />} />
        <Route path="/retrieval" element={<LandCoverLayout container={<DataRetrieval />} />} />
        <Route path="/assets" element={<LandCoverLayout container={<DataAssets />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

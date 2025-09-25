import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from "recoil";
import './index.css'
import App from './App'
createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
)



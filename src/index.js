import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { ThemeProvider } from "@material-tailwind/react";
import AppRoutes from './Routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);


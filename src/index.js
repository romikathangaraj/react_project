import React from 'react';
import ReactDOM from 'react-dom/client';
import CollapsibleExample from './scroll'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PageSelector from './app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <PageSelector/>
  </>
);
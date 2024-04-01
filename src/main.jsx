import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

)



// const root = createRoot(document.getElementById('root'));

// root.render(
// <Auth0Provider
//     domain="dev-4zxyc845vquu0dla.us.auth0.com"
//     clientId="yg0x60OlorugurbymU2Xv2sap8Q8pw9x"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
// );
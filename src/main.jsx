import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
    <BrowserRouter >
    <App />
    <ToastContainer
    position="top-right"
    autoClose={3500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition: Bounce
    />
    </BrowserRouter>
    </>
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
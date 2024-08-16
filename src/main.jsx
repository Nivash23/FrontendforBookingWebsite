import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="431537192846-9jvea9a38lsr4c37bul91a1cvsl0bei2.apps.googleusercontent.com">

        <App />
    </GoogleOAuthProvider>
)

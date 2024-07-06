import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './Footer.jsx'
import Info from './Info.jsx'
import About from './About.jsx'
import Interests from './Interests.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <About />
    <Interests />
    <Footer />
    {/* <App /> */}
  </React.StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <header>
        <nav>
            <div class="navsection">            
            <img class="mainlogo" src="logo.png" 
            alt="BrightCraft Lighting Logo" />
            <div class="logo">BRIGHTCRAFT<span>LIGHTING</span></div>
        </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero-card">
            <h1>Illuminating Your Vision</h1>
            <p>Welcome to <strong>BrightCraft Lighting</strong>. Founded on February 1st, 2026, BrightCraft Lighting was built on a passion for crafting unforgettable visual experiences through light, atmosphere, and stage design..</p>
            <p>Brighting the craft, glowing the moments.</p>
            <button class="cta-button">BOOK NOW</button>
        </section>
        <footer>
            <p>&copy; 2026 BrightCraft Lighting. All rights reserved.</p>
            
        </footer>
    </main>
    </>
  )
}

export default App

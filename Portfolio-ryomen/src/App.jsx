import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header >
        <nav className = 'header-main-container'>
          <div className='header-logo-container'>
            <a>Logo</a>
          </div>

          <div className='header-navbar-container'>
            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT ME</a></li>
              <li><a href="">PORTFOLIO</a></li>
              <li><a href="">SERVICES</a></li>
              <li><a href="">EXPERIENCE</a></li>
              <li><a className = 'nav-item-button' href="">CONTACT</a></li>

            </ul>
          </div>
        </nav>
      </header>

      <section className='presentation-container'>
        <h1>I am rommel</h1>
      </section>
    </>
  )
}

export default App

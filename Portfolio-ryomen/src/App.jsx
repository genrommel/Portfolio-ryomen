import './App.css';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='Main-container'>
      <header className='header-nav-container'>
        <nav>
          <ul>
            <li className='navigation-ul-item'>Experiencia</li>
            <li className='navigation-ul-item'>Proyectos</li>
            <li className='navigation-ul-item'>Sobre mí</li>
            <li className='navigation-ul-item'>Contacto</li>
          </ul>
        </nav>
      </header>

      <section className='data-presentation-container'>
        <img src="" alt="" />
        <h1>
          Desarrollador Frontend
          <a href="">Disponible para trabajar</a>
        </h1>
        <h2>
          Desarrollador Web. Autodidacta y apasionado por la web.
          Especializado en el desarrollo Frontend
        </h2>
        <nav>
          <a href="">Linkedin</a>
          <a href="">GitHub</a>
          <a href="">rommel.cc.lo@gmail.com</a>
        </nav>
      </section>


      <section>
        <h2> Svg Proyectos</h2>
        <article>
          <h3>Playground html css js</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae eum minus sit expedita sint iure quidem id facere ut magnam praesentium, aperiam, ab vel. Vitae aspernatur cum enim voluptatem.</p>
          <ul>
            <li>Next.js</li>
            <li>Html</li>
            <li>Tailwind CSS</li>
          </ul>
          <img src='src/assets/img/DrumKit_Thumbnail.jpeg' alt="" width={200} height={200}/>
        </article>
      </section>


      <footer>
        <div>
          <span></span>
          <ul>
            <li>Sobre mi</li>
            <li>Contacto  </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App

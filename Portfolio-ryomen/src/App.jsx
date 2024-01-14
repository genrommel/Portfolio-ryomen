import './App.css';
import { LinkedinIcon, GithubIcon, MailIcon } from './svgs';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='Main-container'>
      <header className='header-nav-container'>
        <nav>
          <ul>
            <li className='navigation-ul-item'><a href="#">Experiencia</a></li>
            <li className='navigation-ul-item'><a href="#projects">Projectos</a></li>
            <li className='navigation-ul-item'><a href="#">Sobre mí</a></li>
            <li className='navigation-ul-item'><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section className='data-presentation-container' id='presentation'>
        <h1 className='data-name-container'>
          Desarrollador Frontend
          <a href="">Disponible para trabajar</a>
        </h1>
        <h2 className='data-information-container'>
          <span className='data-job'>Desarrollador Web. </span>
          <span className='data-personal'>Autodidacta y apasionado por la web. </span>
          <span className='data-specialization'>Especializado en el desarrollo Frontend.</span>
        </h2>
        <nav className='data-contact-container'>
          <a href=""> <LinkedinIcon color='grey' sizeSquare={'2rem'} /> Linkedin</a>
          <a href=""> <GithubIcon color='grey' sizeSquare={'2rem'}/> GitHub</a>
          <a href=""> <MailIcon color='grey' sizeSquare={'2rem'}/> rommel.cc.lo@gmail.com</a>
        </nav>
      </section>


      <section className='content-projects-container' id='projects'>
        <h2 className='projects-title'> Svg Proyectos</h2>
        <article className='project-container'>
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

      <footer className='footer-container'>
        <div>
          <span>@2024 Todos los derechos blabla</span>
          <ul>
            <li>Sobre mí</li>
            <li>Contacto  </li>
          </ul>
        </div>


      </footer>
    </div>
  )
}

export default App

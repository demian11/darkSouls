import './estilo.css';
import Carrucel from'./carrucel';
import sekiro from './image/sekiro.jpg';
import darksouls from './image/dark2.jpg';
import darksouls2 from './image/dark.webp'
import elden from './image/elden.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="">Inicio</a>
          <a href="">dark souls 3</a>
          <a href="">dark souls 2</a>
          <a href="">sekiro</a>
          <a href="">elden ring</a>
        </nav>
      </header>


      <div className="carousel">

        <div className="list">
          <div className="item">
            <img src={sekiro} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">Diseña tu personaje</div>
              <div className="topic">SEKIRO</div>
              <div className="des">

                Sekiro: Shadows Die Twice es un videojuego de acción y aventura desarrollado por From Software y distribuido por Activision.
                El juego fue lanzado el 22 de marzo de 2019 en las plataformas PlayStation 4, Xbox One y Microsoft Windows.
              </div>
              <div className="buttons">
                <button id="boton5">Ver objetos</button>
                <button id="boton1">ir al sitio oficial</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={darksouls} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={elden} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={darksouls2} />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src={sekiro} />
            <div className="content">
              <div className="title">
                Name Slider
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src={darksouls} />
            <div className="content">
              <div className="title">
                Name Slider
              </div>
              <div className="description">
                Description
              </div>
            </div>
          </div>
          <div className="item">
            <img src={elden} />
            <div className="content">
              <div class="title">
                Name Slider
              </div>
              <div class="description">
                Description
              </div>
            </div>
          </div>
          <div class="item">
            <img src={darksouls2} />
            <div class="content">
              <div class="title">
                Name Slider
              </div>
              <div class="description">
                Description
              </div>
            </div>
          </div>
        </div>


        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>

        <div className="time"></div>
      </div>

      <Carrucel />

      <div>
        <p>hola </p>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Content from "./components/Content"
import Button1 from "./components/Button1"
import Button2 from "./components/Button2"
import perfil from './perfil.png'
import imagen1 from './imagen1.png'
import imagen2 from './imagen2.png'
import imagen3 from './imagen3.png'
import imagen4 from './imagen4.png'

const App = () => {
  const name = 'Angelo'
  const nacionalidad = 'Arequipa, Peru'
  const button1 = 'Seguir a Angelo'
  const button2 = 'Mensaje'

  return (
    <body>
      <div>
        <div class="avatar">
          <img src={perfil}/>
        </div>
          <div class="descripcion">
            <Content name={name} nacionalidad={nacionalidad}/>
          </div>
        <div class="botones">
          <div class="boton1">
            <Button1 button1={button1}/>
          </div>
          <br/>
          <div class="boton2">
            <Button2 button2={button2}/>
          </div>
        </div>
        <div class="fotos">
          <img src={imagen1}/>
          <img src={imagen2}/>
          <img src={imagen3}/>
          <img src={imagen4}/>
        </div>
      </div>
    </body>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
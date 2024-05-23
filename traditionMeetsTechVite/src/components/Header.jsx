import { Link } from "react-router-dom";

export default function Header({urlBackground}){
    const background= {backgroundImage: `url(${urlBackground})`};
    return(
        <div className="header" style={background}>
        <div class="overlay">
          <h1>Tradition Meets Tech</h1>
          <br />
          <h3>Conseguenze della digitalizzazione</h3>
          <br />
          <p>Come hanno reagito le aziende al cambiamento tecnologico, gli aspetti positivi e negativi del progresso nell'era moderna</p>
          <br /> <br /> <br /> <br />
         
         
          <Link to="/" >
          <button> 
                <span class="box"> Vai alla home! </span>
          </button>
          </Link>
        </div>
      </div>
    )
}
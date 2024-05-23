import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer"> 

            <div class="card text-center">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Componenti del gruppo</h5>
                <p class="card-text">Colacicco Laura | Fabrizio Daniela| Flagelli Manuel </p>
                <Link to="/Relazione">
                <button> 
                <span class="box"> Curiosità sul progetto!! </span>
                </button>
                </Link>
            </div>
            
            </div>
        </div>
    )
}
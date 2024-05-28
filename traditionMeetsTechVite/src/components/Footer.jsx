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
                <p class="card-text">Colacicco Laura: 000104412 | Fabrizio Daniela: 0001031055| Flagelli Manuel: 0001031994 </p>
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
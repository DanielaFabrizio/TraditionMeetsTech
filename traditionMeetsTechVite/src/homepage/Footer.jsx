export default function Footer({onScroll}){
    return(
        <div className="footer"> 

            <div class="card text-center">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Componenti del gruppo</h5>
                <p class="card-text">Colacicco Laura | Daniela Fabrizio | Manuel Flagelli </p>
                <button  onClick={onScroll}> 
                <span class="box"> Curiosità sul progetto!! </span>
                </button>
            
            </div>
            
            </div>
        </div>
    )
}
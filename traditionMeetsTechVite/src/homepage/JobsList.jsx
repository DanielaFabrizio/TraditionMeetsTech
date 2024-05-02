import './JobsList.css';

function JobsList(){
    function scrollToParagraph() {
        var paragraph = document.getElementById("paragrafo");
        paragraph.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <div className="body">
        <div className="header">
            <div class="overlay">
            <h1>Simply The Best</h1>
            <h3>Reasons for Choosing US</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
            <br />
            <button  onClick={scrollToParagraph}> 
                    <span class="box"> Hover! </span>
            </button>
            </div>
        </div>

        <div id="paragrafo" className='paragrafo'>
            <h3>Questo è il paragrafo di destinazione</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
        </div>

        <div className="divisore">
            <div className="colonna">
                <div className="row">
                    <div class="cardJob">
                        <p class="c-txt">Falegname</p>
                    </div>
                </div>
                <div className="row">
                    <div class="cardJob">
                        <p class="c-txt">Calzolaio</p>
                    </div>
                </div>
            </div>

            <div className="colonna">
                <div className="row">
                    <div class="cardJob">
                        <p class="c-txt">Pellettiere</p>
                    </div>
                </div>
                <div className="row">
                    <div class="cardJob">
                        <p class="c-txt">Agricoltore</p>
                    </div>
                </div>
            </div>

            <div className="colonna">
                <div className="row">
                    <div class="cardJob">
                        <p class="c-txt">Panettiere</p>
                    </div>
                </div>
                <div className="row">
                    <div class="cardJob">
                        <p class="c-txt">Hover Me</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="paragrafo2" className='paragrafo'>
            <h3>Questo è il paragrafo di destinazione</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
        </div>

        <div className="footer"> 
              <div class="card text-center">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">Componenti del gruppo</h5>
                  <p class="card-text">Colacicco Laura | Daniela Fabrizio | Manuel Flagelli </p>
                  <button  onClick={scrollToParagraph}> 
                    <span class="box"> Curiosità sul progetto!! </span>
                  </button>
                </div>
              </div>
        </div>

    </div>  
    );
  }
  
  export default JobsList;
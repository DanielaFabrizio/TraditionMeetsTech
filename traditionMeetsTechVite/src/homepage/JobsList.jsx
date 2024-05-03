import './JobsList.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';

function JobsList(){
    function scrollToParagraph() {
        var paragraph = document.getElementById("paragrafo");
        paragraph.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <div className="body">
        <Header onScroll={scrollToParagraph}
        urlBackground='https://www.unifor.br/documents/20143/573160/foto-materia-unifor-noticias-futuro-logo-ali-getty-images-800.jpg/6b13a8f7-bed7-5c38-effb-8d3f02982e45?t=1620930442724'/>


        <div id="paragrafo" className='paragrafo'>
            <h3>Questo è il paragrafo di destinazione</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
        </div>

        <div className="divisore">
            <div className="colonna">
                <div className="row">
                    <div class="cardJob" id="cardJob1">
                        <p class="c-txt">Falegname</p>
                    </div>
                </div>
                <div className="row">
                    <div class="cardJob" id="cardJob2">
                        <p class="c-txt">Calzolaio</p>
                    </div>
                </div>
            </div>

            <div className="colonna">
                <div className="row">
                    <div class="cardJob" id="cardJob3">
                        <p class="c-txt">Pellettiere</p>
                    </div>
                </div>
                <div className="row">
                    <div class="cardJob" id="cardJob4">
                        <p class="c-txt">Agricoltore</p>
                    </div>
                </div>
            </div>

            <div className="colonna">
                <div className="row">
                    <div class="cardJob" id="cardJob5">
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

        <Footer onScroll={scrollToParagraph}/>

    </div>  
    );
  }
  
  export default JobsList;
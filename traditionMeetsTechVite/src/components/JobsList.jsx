import './JobsList.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Paragrafo from './Paragrafo.jsx';
function JobsList(){
    function scrollToParagraph() {
        var paragraph = document.getElementById("paragrafo");
        paragraph.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <div className="body">
         <Header onScroll={scrollToParagraph}
     urlBackground='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXK0LlzC4X5sn_v2mKFXaiWHeMH9bFDcOOw&s'/>


        <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

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

        <Paragrafo text="lorem "
        textTitle=" titolooo"
        sezioneId=""/>

        <Footer onScroll={scrollToParagraph}/>

    </div>  
    );
  }
  
  export default JobsList;
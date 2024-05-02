import Footer from './Footer.jsx';
import Header from './Header.jsx';
import './Home.css';
import Paragrafo from './Paragrafo.jsx';

function Home(){
    function scrollToParagraph() {
        var paragraph = document.getElementById("paragrafo");
        paragraph.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <div className="body">
     <Header onScroll={scrollToParagraph}
     urlBackground='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXK0LlzC4X5sn_v2mKFXaiWHeMH9bFDcOOw&s'/>

      
      <div id="sezione" className='sezione'>
        <div className='paragrafo' >
        <h4>Titolo o testo, poi decidiamo</h4>
        </div>
      </div>

      <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione2"/>

      <div id="sezione" className='sezione'>
          <div className='paragrafo' id='paragrafoEnd'>
          <h3>Questo è il paragrafo di destinazione</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          </div>
      </div>


      <div  id="sezione" className='sezione'>

        <div class="demo coursemeal">
            <div class="coursemeal__div ">
                
                <picture className="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://www.grandvintage.it/media/catalog/product/cache/470434027cf533a4d2808840ace2ec46/p/h/phpHcPADu.jpeg"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg"/>
                    <img src="https://www.grandvintage.it/media/catalog/product/cache/470434027cf533a4d2808840ace2ec46/p/h/phpHcPADu.jpeg" alt="Falegname"/>
                </picture>     
                
                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Falegname 1800</a>
                </div>
            </div>

            <div class="coursemeal__div">
                
                <picture class="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://www.ilponte.com/wp-content/uploads/2022/05/Falegnameria.jpg"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg"/>
                    <img src="https://www.ilponte.com/wp-content/uploads/2022/05/Falegnameria.jpg" alt="Main Course"/>
                </picture> 

                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Nel 2000</a>
                </div>            
            </div>

            <div class="coursemeal__div">
                
                <picture class="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://www.homag.com/fileadmin/_processed_/2/c/csm_Digitalization-for-carpenters-and-woodworking-shops-Apps-and-assistants-from-HOMAG_6d62289de6.png"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg"/>
                    <img src="https://www.homag.com/fileadmin/_processed_/2/c/csm_Digitalization-for-carpenters-and-woodworking-shops-Apps-and-assistants-from-HOMAG_6d62289de6.png" alt="Desserts"/>
                </picture>

                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Nel 2020</a>
                </div>              
            </div>


          </div>
      </div>

      <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione3"/>
    
      <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

      <Footer onScroll={scrollToParagraph}/>

    </div>  
    );
  }
  
  export default Home;
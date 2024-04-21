import './Home.css';

function Home(){
    function scrollToParagraph() {
        var paragraph = document.getElementById("paragrafo");
        paragraph.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <div className="body">
      <div className="header">
        <div class="overlay">
          <h1>Tradition Meets Tech</h1>
          <h3>Reasons for Choosing US</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          <br />
          <button  onClick={scrollToParagraph}> 
                <span class="box"> Hover! </span>
          </button>
        </div>
      </div>

      <div id="sezione" className='sezione'>
        <div className='paragrafo' >
        <h4>Titolo o testo, poi decidiamo</h4>
        </div>
      </div>

      <div id="sezione2" className='sezione'>
          <div className='paragrafo'>
          <h3>Questo è il paragrafo di destinazione</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          </div>
      </div>

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

      <div id="sezione3" className='sezione'>
          <div className='paragrafo'>
          <h3>Questo è il paragrafo di destinazione</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          </div>
      </div>
    
      <div id="sezione" className='sezione'>
          <div className='paragrafo' id='paragrafoEnd'>
          <h3>Questo è il paragrafo di destinazione</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          </div>
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
  
  export default Home;
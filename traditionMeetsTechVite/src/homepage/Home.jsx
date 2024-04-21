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
        <div className='paragrafo'>
        <h4>La storia del lavoro</h4>
        </div>
      </div>

      <div id="sezione2" className='sezione'>
          <div className='paragrafo'>
          <h3>Questo è il paragrafo di destinazione</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          </div>
      </div>

      <div id="sezione" className='sezione'>
          <div className='paragrafo'>
          <h3>Questo è il paragrafo di destinazione</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          </div>
      </div>


      <div>

        <div class="demo coursemeal">
            <div class="coursemeal__div ">
                
                <picture className="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://www.ilponte.com/wp-content/uploads/2022/05/Falegnameria.jpg"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg"/>
                    <img src="https://www.ilponte.com/wp-content/uploads/2022/05/Falegnameria.jpg" alt="Falegname"/>
                </picture>     
                
                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Falegname</a>
                </div>
            </div>

            <div class="coursemeal__div">
                
                <picture class="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg"/>
                    <img src="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg" alt="Main Course"/>
                </picture> 

                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Main Course</a>
                </div>            
            </div>

            <div class="coursemeal__div">
                
                <picture class="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://i.postimg.cc/9FfLh6ZZ/dessert-img-1.jpg"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg"/>
                    <img src="https://i.postimg.cc/ZKcFCVFZ/dessert-img-1.jpg" alt="Desserts"/>
                </picture>

                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Dessert</a>
                </div>              
            </div>


          </div>
      </div>
    
       <div className="footer"> 

        </div>

    </div>  
    );
  }
  
  export default Home;
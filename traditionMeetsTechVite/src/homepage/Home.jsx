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
          <div class="row">

             <div class="col-8"> 
                <div className='overlay-divisore'>
                  <h1>Simply The Best</h1>
                  <h3>Reasons for Choosing US</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                  <br />
                </div> 
              </div>


            <div class="col-4">
              <div class="item-hints">
                  <div class="hint" data-position="4">
                    <span class="hint-radius"></span>
                    <span class="hint-dot">Tip</span>
                    <div class="hint-content do--split-children">
                      <p>Use Navbar to navigate the website quickly and easily.</p>
                    </div>
                  </div>
              </div>
            </div>

              
          </div>
         
        </div>

        <div id="paragrafo2" className='paragrafo'>
        <h3>Questo è il paragrafo di destinazione</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
       </div>

       <div className="footer"> 

        </div>

    </div>  
    );
  }
  
  export default Home;
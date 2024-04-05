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
          <button  onclick="scrollToParagraph()">READ MORE</button>
        </div>
      </div>

      <div id="paragrafo" className='paragrafo'>
        <h3>Questo è il paragrafo di destinazione</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
      </div>

        <div className="divisore">
            
        </div>
    </div>  
    );
  }
  
  export default Home;
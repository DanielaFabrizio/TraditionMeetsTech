export default function Header({onScroll, urlBackground}){
    const background= {backgroundImage: `url(${urlBackground})`};
    return(
        <div className="header" style={background}>
        <div class="overlay">
          <h1>Tradition Meets Tech</h1>
          <h3>Reasons for Choosing US</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          <br />
          <button  onClick={onScroll}> 
                <span class="box"> Hover! </span>
          </button>
        </div>
      </div>
    )
}
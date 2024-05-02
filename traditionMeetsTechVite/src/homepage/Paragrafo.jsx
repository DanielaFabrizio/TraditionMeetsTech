export default function Paragrafo ({text, titleText, sezioneId}){

    return(
   <div id={sezioneId} className='sezione'>
          <div className='paragrafo'>
          <h3>Questo è il paragrafo di destinazione</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          </div>
    </div>
    )
}
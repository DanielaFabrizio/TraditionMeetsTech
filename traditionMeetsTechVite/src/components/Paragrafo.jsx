export default function Paragrafo ({text, textTitle, sezioneId}){

    return(
    <div id={sezioneId} className='sezione'>
          <div className='paragrafo'>
          <h3>{textTitle}</h3>
          <p>{text}</p>
          </div>
    </div>
    )
}
export default function Paragrafo ({text, textTitle, sezioneId, sezioneEnd}){

    return(
    <div id={sezioneId} className='sezione'>
          <div className="paragrafo" id={sezioneEnd ? sezioneEnd : ""}>
          <h3>{textTitle}</h3>
          <p>{text}</p>
          </div>
    </div>
    )
}
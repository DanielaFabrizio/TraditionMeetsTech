import './interviste.css';
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Footer from './Footer.jsx';

export default function Interviste({props}){
   
    return ( 
      <div className="body">
        <Header 
        urlBackground='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXK0LlzC4X5sn_v2mKFXaiWHeMH9bFDcOOw&s'/>
        
        <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          
          <Question question="Qual è la capitale dell'Italia?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="Qual è la capitale dell'Italia?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="Qual è la capitale dell'Italia?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>
          
        </div>
      
      
        <Footer />
        
      </div> 

);
}
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import './Home.css';
import Paragrafo from './Paragrafo.jsx';
import { Link } from 'react-router-dom';
import JobsList from './JobsList.jsx';

function Home(){
    function scrollToParagraph() {
        var paragraph = document.getElementById("paragrafo");
        paragraph.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <div className="body">
     <Header onScroll={scrollToParagraph}
     urlBackground='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXK0LlzC4X5sn_v2mKFXaiWHeMH9bFDcOOw&s'/>

      
      <Paragrafo text="L'idea del progetto è nata osservando attentamente la realtà che ci circonda e notando i profondi cambiamenti che le aziende locali hanno subito negli ultimi anni. La trasformazione digitale ha rivoluzionato il modo in cui le imprese operano, comunicano e interagiscono con i clienti. 
        Abbiamo effettuato diverse ricerche che dimostrano l'impatto che la tecnologia ha avuto sulle  imprese. A sostegno di questa tesi sono state effettuate delle interviste ad alcuni imprenditori."
        textTitle="Studio e sviluppo del progetto"
        sezioneId="sezione3"/>

      <Paragrafo text="Abbiamo sviluppato un sito web dinamico utilizzando il framework React, progettato per offrire un'interfaccia utente intuitiva che rendesse il testo piacevole da leggere.
        La scelta di React come framework principale è stata dettata dalla necessità di creare un'interfaccia utente moderna e altamente reattiva. React consente una gestione efficiente dello stato dell'applicazione e una facile integrazione con altre librerie e strumenti.
        Questo framework ci ha permesso di creare dei componenti che abbiamo riutilizzato all'interno della pagina e mette a disposizione la libreria React Router Dom, grazie alla quale è stato più facile realizzare l'istradamento tra le pagine del sito."
        textTitle="Creazione pagina web"
        sezioneId="sezione"
        sezioneEnd="paragrafoEnd"/>

      <Paragrafo text="La chatbot è stata sviluppata per fornire risposte immediate e precise alle domande degli utenti, migliorando l'esperienza interattiva sulla pagina web.
        E' stata sviluppata utilizzando la piattaforma Tidio e, sfruttando l'intelligenza artificiale, è stata istruita e allenata sul tema della digitalizzazione. 
        Il bot utilizza delle tecniche di elaborazione del linguaggio naturale (NLP) per migliorare la comprensione delle richieste dell'utente."
        textTitle="Chatbot Informativa"
        sezioneId="sezione2"/>

      <Paragrafo text="Il progetto ci ha fatto capire quanto è stata importante la digitalizzazione, ma soprattutto le sfide che le imprese hanno dovuto affrontare per stare al passo con il cambiamento.
        Al giorno d'oggi diamo per scontate le tecnologia che utilizziamo quotidianamente, ma se ci voltiamo e guardiamo indietro possiamo renderci conto di quanto siamo avvantaggiati e fortunati ad essere nati in questo periodo storico. "
        textTitle="Conclusione"
        sezioneId="sezione"
        sezioneEnd="paragrafoEnd"/>

      

      <Footer onScroll={scrollToParagraph}/>

    </div>  
    );
  }
  
  export default Home;
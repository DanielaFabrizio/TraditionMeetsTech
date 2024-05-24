import './interviste.css';
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function Costruttore(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
    return ( 
      <div className="body">
        <Header 
        urlBackground='https://www.euroformation.it/wp-content/uploads/2020/07/corso-di-formazione-lavorare-come-muratore-euroformation-scuola-di-formazione-digitale-e-corsi-online.jpg'/>
        
        <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          
          <Question question="Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?" sezioneId="domanda1" />
          <Answer answer="Sono il titolare di una impresa edile che si occupa maggiormente di riparazione e ristrutturazione di esterni. Mio padre faceva questo mestiere così ho iniziato sin da piccolo a lavorare in questo campo, fino a provare ad aprirmi un azienda ormai quasi 25 anni fa, subito dopo il matrimonio." sezioneId="risposta1"/>

          <Question question="Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?" sezioneId="domanda1" />
          <Answer answer="Ho col tempo dovuto integrare strumenti digitali maggiormente fatturazione elettronica e pec, in piccola parte software e correlati visualizzatori per la progettazione degli interni o per la prospettiva del lavoro compiuto, prima di svolgerlo" sezioneId="risposta1"/>

          <Question question="Quali cambiamenti ha dovuto apportare al suo mestiere o alla sua attività per adeguarsi all'era digitale?" sezioneId="domanda1" />
          <Answer answer="Nel svolgere prettamente il mio lavoro nulla di più, è un lavoro prettamente manuale dopo il digitale interferisce poco e quasi totalmente non potrà mai sostituirlo però ho modernizzato ad esempio le impalcature integrando a quelle tradizionali ad esempio ascensori che praticamente funzionano come quelli interni solo che si installano nell'impalcatura per agevolare e rendere più sicura la salita e la discesa. L'altro aspetto più digitalizzato come ho detto prima è la relazione col cliente quindi tramite pec, fatturazione elettronica ecc..." sezioneId="risposta1"/>

          <Question question="Ha introdotto nuove tecniche o tecnologie nel suo processo produttivo? Potrebbe fornire degli esempi?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="Come si tiene aggiornato con le nuove tecnologie e tendenze del suo settore?" sezioneId="domanda1" />
          <Answer answer="Sono iscritto a delle newsletter di settore e partecipo a dei convegni per esempio alcuni della Mapei" sezioneId="risposta1"/>

          <Question question="La digitalizzazione ha cambiato il suo rapporto con i clienti?" sezioneId="domanda1" />
          <Answer answer="Si, rende più user-friendly il dialogo e la pubblicizzazione e facilita mostrare al cliente come appare a lavoro compiuto ciò che svolgiamo in modo tale da affinare meglio i requisiti che ci chiedono per essere il più vicino possibile alle loro richieste" sezioneId="risposta1"/>

          <Question question="Utilizza strumenti digitali per la comunicazione o la gestione degli ordini? Come ha trovato questa transizione?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="Come percepisce la competizione con le nuove realtà digitali o online che offrono servizi simili ai suoi?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="Cosa pensa che il suo mestiere tradizionale offra che non può essere replicato online?" sezioneId="domanda1" />
          <Answer answer="Essendo prettamente manuale e specifico per ogni situazione non penso sia replicabile solo con il digitale" sezioneId="risposta1"/>

          <Question question="Quali sono le maggiori sfide che prevede per il suo mestiere nell'era digitale nei prossimi anni?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="Come si immagina il futuro del suo mestiere? Vede un'ulteriore evoluzione o integrazione con il digitale?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="Quali consigli darebbe a qualcuno che vuole entrare nel suo campo di lavoro oggi?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>

          <Question question="C'è qualcosa che avrebbe fatto diversamente in termini di adattamento digitale, se potesse tornare indietro?" sezioneId="domanda1" />
          <Answer answer="ciao a tutti" sezioneId="risposta1"/>
          
        </div>
      
      
        <Footer />

      </div> 

    );
}


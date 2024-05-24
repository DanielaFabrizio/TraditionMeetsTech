import './interviste.css';
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function Agricoltore(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
    return ( 
      <div className="body">
        <Header 
        urlBackground='https://illegumedeisassi.com/wp-content/uploads/2022/10/no-one-cares-l_5MJnbrmrs-unsplash-1536x1152.jpg'/>
        
        <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          
          <Question question="Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?" sezioneId="domanda1" />
          <Answer answer="Sono Giuseppe, un produttore all'ingrosso e al dettaglio di: cereali, legumi, foraggi, olio evo, ecc... Mi sono interessata a questo settore grazie a mio suocero che mi ha guidato e sostenuto in questa scelta." sezioneId="risposta1"/>

          <Question question="Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?" sezioneId="domanda1" />
          <Answer answer="Sì, ho integrato con un sito web illustrativo e gestisco una pagina Instagram. La vendita online è esclusiva dei nostri clienti poiché ho scelto di non implementarla direttamente sul nostro sito web." sezioneId="risposta1"/>

          <Question question="In che modo la presenza online ha influenzato la sua clientela e il suo business?" sezioneId="domanda1" />
          <Answer answer="È aumentata la visibilità e abbiamo conferito in alcune località diverse dal territorio locale" sezioneId="risposta1"/>

          <Question question="Quali cambiamenti ha dovuto apportare al suo mestiere o alla sua attività per adeguarsi all'era digitale?" sezioneId="domanda1" />
          <Answer answer="Ho seguito la Misura di Ammodernamento Aziendale, un programma che finanzia gli investimenti di ammodernamento delle aziende agricole, promuovendo l'innovazione di processo e di prodotto." sezioneId="risposta1"/>

          <Question question="Ha introdotto nuove tecniche o tecnologie nel suo processo produttivo? Potrebbe fornire degli esempi?" sezioneId="domanda1" />
          <Answer answer="Ho introdotto nuovi macchinari come: trattrici, attrezzature moderne." sezioneId="risposta1"/>

          <Question question="Come si tiene aggiornato con le nuove tecnologie e tendenze del suo settore?" sezioneId="domanda1" />
          <Answer answer="Attraverso le fiere del settore e riviste specializzate." sezioneId="risposta1"/>

          <Question question="La digitalizzazione ha cambiato il suo rapporto con i clienti?" sezioneId="domanda1" />
          <Answer answer="No" sezioneId="risposta1"/>

          <Question question="Utilizza strumenti digitali per la comunicazione o la gestione degli ordini? Come ha trovato questa transizione?" sezioneId="domanda1" />
          <Answer answer="Si, utilizzo gli strumenti digitali. Questa modalità di transizione la trovo distante dai rapporti umani, i quali sono alla base della fidelizzazione." sezioneId="risposta1"/>

          <Question question="Come percepisce la competizione con le nuove realtà digitali o online che offrono servizi simili ai suoi?" sezioneId="domanda1" />
          <Answer answer="La diversità incuriosisce ma non mi preoccupa poiché offriamo un servizio di assistenza clienti molto efficiente." sezioneId="risposta1"/>

          <Question question="Cosa pensa che il suo mestiere tradizionale offra che non può essere replicato online?" sezioneId="domanda1" />
          <Answer answer="I rapporti umani non saranno mai sostituiti da quelli online, poiché questi possono solo affiancarli." sezioneId="risposta1"/>

          <Question question="Quali sono le maggiori sfide che prevede per il suo mestiere nell'era digitale nei prossimi anni?" sezioneId="domanda1" />
          <Answer answer="Prevedo che le nanotecnologie possano essere una sfida, ma al contempo un ottimo strumento di cui avvalersi, queste potrebbero apportare una maggiore produzione con riduzione dei costi relativi, in quanto queste consentono di manipolare i processi biologici su scala molecolare offrendo nuove opportunità per lo sviluppo di colture più resistenti alle malattie, più nutrienti e in grado di adattarsi meglio ai cambiamenti ambientali" sezioneId="risposta1"/>

          <Question question="Come si immagina il futuro del suo mestiere? Vede un'ulteriore evoluzione o integrazione con il digitale?" sezioneId="domanda1" />
          <Answer answer="L'agricoltura tradizionale sarà sempre più superata dell'agricoltura di precisione, la quale permetterà un utilizzo più consapevole ed efficiente di acqua, fertilizzanti e pesticidi, senza inficiare sulla produzione, anzi ottimizzandola. Credo che nasceranno nuovi dispositivi basati sull'intelligenza artificiale che studieranno in tempo reale il fabbisogno di ciascuna pianta e interverranno sulla superfice delle cultivar utilizzando i laser per eliminare parassiti e/o infestanti" sezioneId="risposta1"/>

          <Question question="Quali consigli darebbe a qualcuno che vuole entrare nel suo campo di lavoro oggi?" sezioneId="domanda1" />
          <Answer answer="Consiglio di intraprendere questo percorso con voglia di mettersi in gioco in prima persona, partendo da un approfondita formazione tecnico-culturale e di non scoraggiarsi ai primi imprevisti, ma di fare di questi tesoro." sezioneId="risposta1"/>

          <Question question="C'è qualcosa che avrebbe fatto diversamente in termini di adattamento digitale, se potesse tornare indietro?" sezioneId="domanda1" />
          <Answer answer="Avrei potuto certamente sfruttare in modo più completo le nuove tecnologie per ampliare ulteriormente la rete commerciale." sezioneId="risposta1"/>

          <Question question="Quali tecnologie digitali ha adottato per migliorare la sostenibilità e l'efficienza della sua produzione agricola?" sezioneId="domanda1" />
          <Answer answer="Da 8 anni ho adottato la Misura Semina Sodo, la quale prevede un uso parsimonioso delle lavorazioni di fondo e la semina diretta sulle superfici; ho ridotto il consumo di: concimi e diserbo; ho aderito all'ecosistema ECO4 attenendomi scrupolosamente alla rotazione delle colture per ridurre l'uso di concimi chimici." sezioneId="risposta1"/>

          <Question question="Come utilizza piattaforme online per vendere i suoi prodotti direttamente ai consumatori?" sezioneId="domanda1" />
          <Answer answer="Come scelta aziendale ho preferito non utilizzare piattaforme online per vendere i miei prodotti poiché se ne occupano già i miei clienti." sezioneId="risposta1"/>
          
          <Question question="Ha esperienze con l'agricoltura di precisione, come l'uso di droni o sensori IoT per monitorare le colture?" sezioneId="domanda1" />
          <Answer answer="Ho esperienza in merito, dato che tutte i nostri macchinari e attrezzature sono di ultima generazione, permettono le lavorazioni di precisione. Non utilizzo sensori IoT perché mi avvalgo di analisi compiute in laboratorio" sezioneId="risposta1"/>
        </div>
      
      
        <Footer />

      </div> 

    );
}


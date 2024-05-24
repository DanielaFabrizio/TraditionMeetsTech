import './interviste.css';
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function Interviste({props}){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
    return ( 
      <div className="body">
        <Header 
        urlBackground='https://mlgxnmse8r6y.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://www.falegnameriacolacicco.it/web/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-13-at-08.43.43-2.jpeg'/>
        
        <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          
          <Question question="Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?" sezioneId="domanda1" />
          <Answer answer="Sono Luca, un artigiano del legno di terza generazione ho imparato questo mestiere sin da piccolo. Il laboratorio era ubicato sotto l’abitazione quindi inevitabilmente sono cresciuto in bottega e di conseguenza ho avuto la fortuna di apprezzare quello che oggi ritengo il miglior materiale che si possa lavorare: il legno.  " sezioneId="risposta1"/>

          <Question question="Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?" sezioneId="domanda1" />
          <Answer answer="Naturalmente con l’introduzione delle tecnologie il lavoro del falegname ha subito una trasformazione non indifferente quindi ci ha costretti a adeguarci e a trasformare alcune fasi di lavorazioni. Anche l’avvento di internet ci ha dato la possibilità di accorciare le distanze tra il cliente. Infatti abbiamo subito integrato sistemi web che ci hanno permesso di raggiungere i nostri clienti in ogni parte del mondo." sezioneId="risposta1"/>

          <Question question="Quali cambiamenti ha dovuto apportare al suo mestiere o alla sua attività per adeguarsi all'era digitale?" sezioneId="domanda1" />
          <Answer answer="Uno dei cambiamenti principali è stato l’introduzione di macchine a controllo numerico (cnc) che ci ha permessi di avere una migliore efficienza produttiva." sezioneId="risposta1"/>
          
          <Question question="Ha introdotto nuove tecniche o tecnologie nel suo processo produttivo? Potrebbe fornire degli esempi?" sezioneId="domanda1" />
          <Answer answer="Un esempio che riesce a far capire l’innovazione è la fase produttiva di taglio pannelli che prima era realizzata con tecniche esclusivamente manuali oggi invece con il cnc attraverso l’utilizzo di software cad/cam il processso avviene tutto in automatico." sezioneId="risposta1"/>

          <Question question="Come si tiene aggiornato con le nuove tecnologie e tendenze del suo settore?" sezioneId="domanda1" />
          <Answer answer="L’aggiornamento, quanto riguarda i software, avviene spesse volte con la formazione che può anche avvenire online mentre per le macchine attraverso fiere di settore." sezioneId="risposta1"/>

          <Question question="La digitalizzazione ha cambiato il suo rapporto con i clienti?" sezioneId="domanda1" />
          <Answer answer=" Per la gestione degli ordini utilizziamo software gestionali che riescono a monitorare sia fornitori che clienti." sezioneId="risposta1"/>

          <Question question="Utilizza strumenti digitali per la comunicazione o la gestione degli ordini? Come ha trovato questa transizione?" sezioneId="domanda1" />
          <Answer answer="Oggi ci sono molti competitors sul mercato uno dei nostri punti di forza è la gestione del problem solving che ci distingue." sezioneId="risposta1"/>

          <Question question="Come percepisce la competizione con le nuove realtà digitali o online che offrono servizi simili ai suoi?" sezioneId="domanda1" />
          <Answer answer="Sono tante le ragioni che la tecnologia riesce a migliorare l’efficienza della gestione del cliente. L’uso della tecnologia permette di monitorare tutte le fasi di produzione in modo che il cliente è sempre informato e “coccolato” e riesce a gestire anche gli eventuali difetti del prodotto stesso." sezioneId="risposta1"/>

          <Question question="Cosa pensa che il suo mestiere tradizionale offra che non può essere replicato online?" sezioneId="domanda1" />
          <Answer answer="Una delle maggiori sfide è quella di cercare di reggere in un momento particolare come quello che stiamo vivendo e facendo una riorganizzazione strutturale dell’azienda stessa investendo in ricerca e innovazione di processo e di prodotto. Per quanto riguarda il lavoro artigianale difficilmente può essere replicato online in quanto la peculiarità dell’ artigiano è proprio quella di creare prodotti pensati e realizzati utilizzando metodi e tecniche personali sia manuali che digitali. Per questo motivo tutto quello che è in rete può essere un modello di ispirazione." sezioneId="risposta1"/>

          <Question question="Quali sono le maggiori sfide che prevede per il suo mestiere nell'era digitale nei prossimi anni?" sezioneId="domanda1" />
          <Answer answer="Credo che l’utilizzo dello strumento digitale per noi artigiani diventa fondamentale in quanto i vantaggi sono veramente tanti, dalla riduzione dei tempi di lavorazione contribuendo a una riduzione dei costi che rende il prodotto più competitivo, fino a quello che molte volte viene sottovalutato che riguarda la sicurezza dei processi produttivi migliorando di molto la qualità del lavoro-uomo. Quindi credo che non ci sia una possibilità di tornare indietro." sezioneId="risposta1"/>

          <Question question="Come si immagina il futuro del suo mestiere? Vede un'ulteriore evoluzione o integrazione con il digitale?" sezioneId="domanda1" />
          <Answer answer="Credo che il futuro del nostro mestiere sarà legato ancora di più alla tecnologia secondo me la prossima evoluzione probabilmente sarà legata alla tecnologia additiva.  " sezioneId="risposta1"/>

          <Question question="Quali consigli darebbe a qualcuno che vuole entrare nel suo campo di lavoro oggi?" sezioneId="domanda1" />
          <Answer answer="Il mio consiglio è quello di studiare e approfondire il materiale legno in modo da percepire le caratteristiche tecniche e organiche in modo da apprezzare e a innamorarsi di questo mestiere senza trascurare quelle conoscenze tecniche che permettono di conoscere la tecnologia. " sezioneId="risposta1"/>

          <Question question="C'è qualcosa che avrebbe fatto diversamente in termini di adattamento digitale, se potesse tornare indietro?" sezioneId="domanda1" />
          <Answer answer="Credo che l’utilizzo dello strumento digitale per noi artigiani diventa fondamentale in quanto i vantaggi sono veramente tanti, dalla riduzione dei tempi di lavorazione contribuendo a una riduzione dei costi che rende il prodotto più competitivo, fino a quello che molte volte viene sottovalutato che riguarda la sicurezza dei processi produttivi migliorando di molto la qualità del lavoro-uomo. Quindi credo che non ci sia una possibilità di tornare indietro" sezioneId="risposta1"/>

        </div>
      
      
        <Footer />

      
      
        {/* // <div>
        //   <Tabs isFitted variant='enclosed'>
        //   <TabList mb='1em'>
        //     <Tab>Falegname</Tab>
        //     <Tab>Fabbrica</Tab>
        //     <Tab>Calzolaio</Tab>
        //     <Tab>Agricoltore</Tab>
        //     <Tab>Alimentari</Tab>
        //   </TabList>
        //   <TabPanels>
        //     <TabPanel>
        //       <p>Falegname</p>
        //     </TabPanel>
        //     <TabPanel>
        //       <p>Fabbrica</p>
        //     </TabPanel>
        //     <TabPanel>
        //       <p>Calzolaio</p>
        //     </TabPanel>
        //     <TabPanel>
        //       <p>Agricoltore</p>
        //     </TabPanel>
        //     <TabPanel>
        //       <p>Alimentari</p>
        //     </TabPanel>
        //   </TabPanels>
        // </Tabs>
        // </div> 
        
        
        <li>
              Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?
            </li>
              <p>hhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <li>Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?
            In che modo la presenza online ha influenzato la sua clientela e il suo business?
            </li>
            <p></p>
            <li>
            Quali cambiamenti ha dovuto apportare al suo mestiere o alla sua attività per adeguarsi all'era digitale?
            </li>
            <p></p>
            <li>
            Ha introdotto nuove tecniche o tecnologie nel suo processo produttivo? Potrebbe fornire degli esempi?
            </li>
            <li>
            Come si tiene aggiornato con le nuove tecnologie e tendenze del suo settore?
            </li>
            <li>
            La digitalizzazione ha cambiato il suo rapporto con i clienti?
            </li>
            <li>
            Utilizza strumenti digitali per la comunicazione o la gestione degli ordini? Come ha trovato questa transizione?
            </li>
            <li>
            Come percepisce la competizione con le nuove realtà digitali o online che offrono servizi simili ai suoi?
            </li>
            <li>
            Cosa pensa che il suo mestiere tradizionale offra che non può essere replicato online?
            </li>
            <li>
            Quali sono le maggiori sfide che prevede per il suo mestiere nell'era digitale nei prossimi anni?
            </li>
            <li>
            Come si immagina il futuro del suo mestiere? Vede un'ulteriore evoluzione o integrazione con il digitale?
            </li>
            <li>
            Quali consigli darebbe a qualcuno che vuole entrare nel suo campo di lavoro oggi?
            </li>
            <li>
            C'è qualcosa che avrebbe fatto diversamente in termini di adattamento digitale, se potesse tornare indietro?
            </li>

            <h3>Domande specifiche:</h3>
            <li></li>
            <li></li>*/}

      </div> 

    );
}


import './interviste.css';
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function Calzolaio(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
    return ( 
      <div className="body">
        <Header 
        urlBackground='https://a.mktgcdn.com/p/dVqNSpQXfuKKTUoVSEiFXpEtVFAFC_yb_Cqqipn6cnk/509x331.png'/>
        
        <Paragrafo text="Andrea Russo, calzolaio iscritto all'albo dal 1996 e 'figlio d'arte', ha trasformato la sua attività sfruttando social media e tecnologie digitali. In questa intervista, ci racconta come ha integrato il digitale nel suo mestiere tradizionale, mantenendo un forte legame con i clienti."
        textTitle="Un Calzolaio Tradizionale nell'Era Digitale"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          
          <Question question="Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?" sezioneId="domanda1" />
          <Answer answer="Sono Andrea Russo, un calzolaio di lunga esperienza, ho ereditato il mestiere da mio padre e mi definisco un 'figlio d'arte'. L'evoluzione nel settore mi ha portato a integrare strumenti digitali come siti web e social media per promuovere i servizi che offro. Oggi gestisco un'azienda che si avvale ampiamente dei social media e di un sito web per raggiungere un maggior numero di clienti." sezioneId="risposta1"/>

          <Question question="Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?" sezioneId="domanda1" />
          <Answer answer="Sì, ho integrato strumenti digitali come siti web e social media nella mia attività. Questo mi ha permesso di raggiungere una clientela più ampia e di promuovere i servizi in modo efficace. La presenza online ha influenzato positivamente il business, consentendomi di ampliare la portata della clientela e di adattarmi alle esigenze del mercato moderno." sezioneId="risposta1"/>

          <Question question="Quali cambiamenti ha dovuto apportare al suo mestiere o alla sua attività per adeguarsi all'era digitale?" sezioneId="domanda1" />
          <Answer answer="Per adeguarmi all'era digitale, ho dovuto apportare cambiamenti significativi al mio mestiere e alla mia attività. Ho introdotto l'uso di strumenti digitali per la comunicazione e la gestione degli ordini, ho implementato nuove tecniche di marketing online e ho migliorato l'efficienza operativa attraverso l'automazione dei processi." sezioneId="risposta1"/>

          <Question question="Ha introdotto nuove tecniche o tecnologie nel suo processo produttivo? Potrebbe fornire degli esempi?" sezioneId="domanda1" />
          <Answer answer="Sì, ho introdotto nuove tecniche e tecnologie nel processo produttivo. Ad esempio, ho iniziato a utilizzare la tintura di oggetti in pelle e ho migliorato le sue capacità di pulitura e lavaggio delle calzature. Queste nuove tecniche gli hanno permesso di diversificare la sua offerta e di soddisfare meglio le esigenze dei clienti moderni." sezioneId="risposta1"/>
          
          <Question question="Come si tiene aggiornato con le nuove tecnologie e tendenze del suo settore?" sezioneId="domanda1" />
          <Answer answer="Mi mantengo aggiornato con le nuove tecnologie e tendenze del settore partecipando a corsi di aggiornamento e seguendo da vicino le innovazioni nel campo della calzoleria e della moda. Ritiengo che sia fondamentale per rimanere competitivi nel mercato che è in continua evoluzione." sezioneId="risposta1"/>

          <Question question="La digitalizzazione ha cambiato il suo rapporto con i clienti?" sezioneId="domanda1" />
          <Answer answer="Sì, la digitalizzazione ha cambiato il mio rapporto con i clienti. Grazie agli strumenti digitali, sono in grado di comunicare in modo più efficace con i clienti e di offrire loro un servizio più personalizzato e efficiente." sezioneId="risposta1"/>

          <Question question="Utilizza strumenti digitali per la comunicazione o la gestione degli ordini? Come ha trovato questa transizione?" sezioneId="domanda1" />
          <Answer answer="Sì, utilizzo strumenti digitali per la comunicazione e la gestione degli ordini. Ho trovato questa transizione positiva, poiché mi ha permesso di migliorare l'efficienza operativa e di offrire un servizio migliore ai suoi clienti." sezioneId="risposta1"/>

          <Question question="Come percepisce la competizione con le nuove realtà digitali o online che offrono servizi simili ai suoi?" sezioneId="domanda1" />
          <Answer answer="Percepisco la competizione con le nuove realtà digitali o online come una sfida, ma anche come un'opportunità. Ritiengo che la sua esperienza e il suo artigianato tradizionale offrano un valore unico che non può essere replicato online." sezioneId="risposta1"/>

          <Question question="Cosa pensa che il suo mestiere tradizionale offra che non può essere replicato online?" sezioneId="domanda1" />
          <Answer answer="Il mestiere tradizionale di calzolaio offre un'attenzione personalizzata e un artigianato di alta qualità che spesso manca nelle esperienze di acquisto online. Inoltre, i calzolai tradizionali hanno familiarità con le esigenze specifiche dei clienti e sono in grado di offrire consigli esperti e soluzioni su misura." sezioneId="risposta1"/>

          <Question question="Quali sono le maggiori sfide che prevede per il suo mestiere nell'era digitale nei prossimi anni?" sezioneId="domanda1" />
          <Answer answer="Le maggiori sfide che prevedo per il mio mestiere nell'era digitale nei prossimi anni includono la competizione con le realtà digitali, la necessità di rimanere aggiornati con le nuove tecnologie e tendenze del settore, e la gestione delle aspettative dei clienti sempre più esigenti." sezioneId="risposta1"/>

          <Question question="Come si immagina il futuro del suo mestiere? Vede un'ulteriore evoluzione o integrazione con il digitale?" sezioneId="domanda1" />
          <Answer answer="Mi immagino un futuro in cui il mio mestiere continuerà a evolversi e integrarsi sempre più con il digitale. Prevedo che la tecnologia continuerà a giocare un ruolo sempre più importante nel settore della calzoleria, ma credo anche che l'artigianato tradizionale e l'attenzione personalizzata rimarranno fondamentali per il successo nel settore." sezioneId="risposta1"/>

          <Question question="Quali consigli darebbe a qualcuno che vuole entrare nel suo campo di lavoro oggi?" sezioneId="domanda1" />
          <Answer answer="Consiglierei a chiunque voglia entrare nel mio campo di lavoro oggi di essere aperti all'innovazione e di abbracciare le nuove tecnologie. Ritiengo che sia fondamentale rimanere aggiornati con le ultime tendenze del settore e investire nella propria formazione e sviluppo professionale." sezioneId="risposta1"/>

          <Question question="C'è qualcosa che avrebbe fatto diversamente in termini di adattamento digitale, se potesse tornare indietro?" sezioneId="domanda1" />
          <Answer answer="Se potessi tornare indietro, farei in modo di integrare gli strumenti digitali nell' attività in modo più tempestivo e completo. Riconosco l'importanza di adattarsi rapidamente ai cambiamenti del mercato e di sfruttare appieno le opportunità offerte dalla digitalizzazione." sezioneId="risposta1"/>
          
        </div>
      
      
        <Footer />
      </div> 

    );
}


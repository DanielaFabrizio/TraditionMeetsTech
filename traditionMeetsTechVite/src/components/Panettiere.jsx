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
        urlBackground='https://www.miacademy.it/wp-content/uploads/2020/10/impastare-il-pane.jpg'/>
        
        <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          
          <Question question="Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?" sezioneId="domanda1" />
          <Answer answer="Sono Roberto, un panettiere. Il mio mestiere è quello della vendita al dettaglio di alimentari, con un'attenzione particolare ai prodotti freschi e di qualità. Questa attività si tramanda nella mia famiglia da generazioni. Mio padre aveva iniziato come garzone di bottega per un panettiere e, attraverso gli anni, ha sviluppato il suo negozio di alimentari dove io sono cresciuto, apprendendo tutti i segreti del mestiere. Ho ereditato il negozio in seguito a un evento familiare che mi ha costretto ad entrare in affari in giovane età. Da allora, ho portato avanti la tradizione di famiglia, adattando il negozio ai cambiamenti dei tempi e alle esigenze della clientela, mantenendo sempre quel tocco personale e di qualità che ci distingue. " sezioneId="risposta1"/>

          <Question question=" Qual è stata la transizione principale dal panificio originale al negozio di alimentari attuale?" sezioneId="domanda1" />
          <Answer answer="Originariamente, il negozio si occupava esclusivamente di pane fresco, ma con l’avvento dei supermercati negli anni '90, ho dovuto diversificare l’offerta. Abbiamo aggiunto prodotti freschi e vari altri articoli per competere con le nuove realtà commerciali che stavano emergendo, come il Carrefour e altri grandi centri commerciali. " sezioneId="risposta1"/>

          <Question question=" Come ha influenzato la concorrenza dei supermercati il suo business? " sezioneId="domanda1" />
          <Answer answer="I supermercati, con i loro ampi capitali e vasta gamma di prodotti, hanno messo in difficoltà molti piccoli commercianti. Noi abbiamo risposto puntando sulla qualità e sul servizio personalizzato, come la consegna a domicilio, che facevamo già prima che diventasse una pratica comune." sezioneId="risposta1"/>

          <Question question="Come vede il futuro del suo negozio e del commercio tradizionale in generale?" sezioneId="domanda1" />
          <Answer answer=" Il futuro per i negozi come il mio dipenderà dalla capacità di mantenere relazioni personali e fiduciarie con i clienti, distinguendosi dalle grandi catene che trattano il cliente come un numero. La personalizzazione del servizio e l’offerta di esperienze uniche, come le degustazioni in negozio, saranno decisive. Continuerò a puntare su questi aspetti per garantire la sopravvivenza e la prosperità del mio negozio." sezioneId="risposta1"/>

          <Question question="Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?" sezioneId="domanda1" />
          <Answer answer="Sì, abbiamo integrato alcuni strumenti digitali per rimanere al passo con i tempi e facilitare il contatto con la nostra clientela. Utilizziamo principalmente una pagina Facebook per annunciare e promuovere le degustazioni di prodotti che organizziamo regolarmente nel negozio. Questo ci permette di introdurre nuovi prodotti e di educare i clienti sui vari articoli di qualità superiore che offriamo, giustificando così i prezzi leggermente più elevati rispetto ai supermercati. Abbiamo anche un profilo su Google Maps, che aiuta i nuovi clienti a trovarci facilmente quando cercano negozi di alimentari nella zona. Non abbiamo sviluppato un sito web proprio perché la maggior parte della nostra clientela è locale e preferisce il contatto diretto, ma stiamo valutando l'aggiunta di una funzionalità di e-commerce per facilitare gli ordini online, specialmente in considerazione delle esigenze emerse durante la pandemia." sezioneId="risposta1"/>

          <Question question="In che modo la presenza online ha influenzato la sua clientela e il suo business?" sezioneId="domanda1" />
          <Answer answer=" La presenza online ha avuto un impatto decisamente positivo sul nostro business. La pagina Facebook, in particolare, ha aumentato la visibilità delle nostre iniziative promozionali come le degustazioni, attirando non solo abituali della zona ma anche nuovi clienti interessati a prodotti alimentari di nicchia che non si trovano facilmente altrove. Grazie a Google Maps, abbiamo notato un incremento dei clienti di passaggio, che trovano il negozio mentre cercano opzioni per acquisti alimentari nelle vicinanze. Questo strumento digitale ci ha permesso di ampliare la nostra clientela oltre il raggio tradizionale del ''negozio di vicinato'', trasformandoci in una destinazione per gli amanti dei prodotti di qualità." sezioneId="risposta1"/>

          <Question question="Cosa pensa che il suo mestiere tradizionale offra che non può essere replicato online?" sezioneId="domanda1" />
          <Answer answer="Il nostro mestiere tradizionale offre una serie di valori aggiunti che sono difficilmente replicabili online. Primo fra tutti, la personalizzazione del servizio: nel nostro negozio, ogni cliente è trattato come un individuo unico con gusti e preferenze specifici. Possiamo consigliare prodotti basandoci sulla storia d'acquisto del cliente o persino adattare la nostra offerta a seconda delle loro esigenze del momento, qualcosa che una piattaforma online non può offrire con la stessa efficacia. Inoltre, la qualità sensoriale dell'esperienza di acquisto è insostituibile. I clienti possono toccare, annusare e talvolta assaggiare i prodotti prima di acquistarli. Questo aspetto del servizio al dettaglio è fondamentale, specialmente per i prodotti alimentari di alta qualità, dove la freschezza e la provenienza sono cruciali. Infine, un altro elemento distintivo è la creazione di una comunità. Il nostro negozio serve come un punto di incontro sociale dove le persone non solo fanno acquisti, ma si incontrano, scambiano consigli, ricette e persino aggiornamenti di vita. Questa dimensione umana crea un senso di appartenenza e fiducia che un'interfaccia online non può eguagliare." sezioneId="risposta1"/>

          <Question question="C'è qualcosa che avrebbe fatto diversamente in termini di adattamento digitale, se potesse tornare indietro?" sezioneId="domanda1" />
          <Answer answer="Riflettendo sull'evoluzione digitale del nostro negozio, non mi vengono in mente grandi cambiamenti che avrei fatto. Sì, è vero, nessun percorso è esente da errori e ci sono stati sicuramente momenti in cui avremmo potuto fare scelte diverse, ma in generale, le decisioni prese hanno funzionato bene per noi. Ci siamo concentrati sul consolidare la relazione di fiducia e prossimità con i nostri clienti, qualcosa che va oltre qualsiasi piattaforma digitale. Le iniziative che abbiamo adottato, come la presenza su Facebook e Google Maps, sono state adeguate alla natura del nostro business e alla tipologia dei nostri clienti. Certo, c'è sempre spazio per l'innovazione e l'adattamento, ma ritengo che il nostro approccio personale e la qualità del servizio che offriamo siano la vera chiave del nostro successo. In fin dei conti, anche se ripensassi alle scelte fatte, probabilmente arriverei alla conclusione che avrei percorso lo stesso cammino che ci ha portati dove siamo oggi. " sezioneId="risposta1"/>

          <Question question="Quali consigli darebbe a chi vuole aprire un negozio di alimentari oggi?" sezioneId="domanda1" />
          <Answer answer=" È essenziale avere una profonda conoscenza del settore e puntare sulla qualità piuttosto che sul prezzo. La differenziazione tramite prodotti di alta qualità e un servizio eccellente sono vitali. Inoltre, sfruttare le piattaforme social e online per raggiungere i clienti è cruciale. La capacità di adattarsi e innovare, mantenendo al contempo una stretta relazione con la comunità locale, può definire il successo in questo settore." sezioneId="risposta1"/>

          <Question question="Quali sono stati gli effetti della pandemia di COVID-19 sul suo negozio? " sezioneId="domanda1" />
          <Answer answer="La pandemia ha portato una grande pressione, con una forte aumento della domanda. Abbiamo lavorato fino a 15 ore al giorno per soddisfare le esigenze dei clienti. Nonostante le difficoltà, abbiamo cercato di mantenere il servizio al meglio, sfruttando anche la vendita e la degustazione di prodotti di alta qualità per attrarre e mantenere la clientela." sezioneId="risposta1"/>

        </div>
      
      
        <Footer />
        
      </div> 

);
}
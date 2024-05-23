import './JobsList.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Paragrafo from './Paragrafo.jsx';
import { Link } from 'react-router-dom';

function JobsList(){
    function scrollToParagraph() {
        var paragraph = document.getElementById("paragrafo");
        paragraph.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <div className="body">
         <Header onScroll={scrollToParagraph}
     urlBackground='https://media.istockphoto.com/id/1206796363/it/foto/ai-machine-learning-mani-di-robot-e-umani-che-toccano-lo-sfondo-della-connessione-di-rete-dei.jpg?s=612x612&w=0&k=20&c=tmsrMB5_jSqmqKbWRj9QW5YNEvAubIDKYcCZOefW_P8='/>


        <Paragrafo text="L'avvento della tecnologia digitale ha imposto una trasformazione radicale a mestieri secolari, una metamorfosi che non è solo strumentale ma anche culturale e sociale. Mentre il mondo accelera inesorabilmente verso il futuro, mestieri come quelli del calzolaio, del falegname, del panettiere e dell'agricoltore si trovano al bivio tra estinzione e evoluzione.
        L'era digitale non offre scelte facili: l'adozione della tecnologia è diventata una necessità piuttosto che un'opzione. Andrea il calzolaio, con la sua integrazione di social media e strumenti digitali per la gestione dei clienti, non solo ha salvaguardato la sua attività ma ha anche esteso la sua portata ben oltre le mura del suo laboratorio. Questo cambio di paradigma è emblematico per molti: non basta più essere artigiani nel senso tradizionale; bisogna diventare imprenditori nel vasto e spesso spietato mercato globale."
        textTitle="La trasformazione radicale dei Mestieri Tradizionali nell'era Digitale"
        sezioneId="sezione2"/>

        <Paragrafo text="Ma c'è un prezzo da pagare nascosto in questo passaggio. La digitalizzazione può diluire l'essenza stessa dell'artigianato, dove il valore non risiede solo nel prodotto finito, ma nella personalità e nelle storie di chi lo crea. La connessione umana, il tocco personale che un tempo definiva l'acquisto da un artigiano, rischia di perdersi nella traduzione digitale. Luca il falegname di terza generazione che ora utilizza macchine a controllo numerico potrebbe produrre più rapidamente, ma il legame personale e la trasmissione del sapere da una generazione all'altra si attenuano quando il lavoro manuale cede il passo alla produzione automatizzata. "
        textTitle="Il prezzo della Digitalizzazione: La diluizione dell'Essenza Artigianale"
        sezioneId="sezione"
        sezioneEnd="paragrafoEnd"/>

        <Paragrafo text="Per quanto riguarda l'artigianato in fabbrica, il passaggio al digitale rappresenta una svolta decisiva. L'esperienza dell'artigiano che, con il suo partner, ha trasformato una produzione artigianale in un'impresa moderna, è sintomatica dei cambiamenti che molti mestieri stanno affrontando. La digitalizzazione, offrendo la possibilità di vendere attraverso piattaforme online, ha aperto mercati prima inaccessibili e permesso di raggiungere i clienti direttamente, a qualsiasi ora. Ma questo accesso allargato comporta anche un distacco dalla tradizionale interazione cliente-produttore, che prima si svolgeva attraverso intermediari. L'impatto delle recensioni online e la necessità di adattarsi ai ritmi imposti dalle piattaforme digitali mettono a dura prova la capacità di mantenere un servizio personalizzato e l'autenticità artigianale. La sfida per l'artigiano è quindi quella di equilibrare la nuova velocità e portata della produzione digitale con l'essenza del suo lavoro manuale, che rischia di essere omologato in un sistema che premia l'uniformità rispetto all'unicità. "
        textTitle="Artigianato e fabbrica: Equilibrio tra Innovazione e Tradizione"
        sezioneId="sezione3"/>

        <Paragrafo text="La situazione si complica ulteriormente quando consideriamo il panettiere-minimarket, che ha dovuto reinventarsi per competere con le catene di supermercati. Qui, la digitalizzazione, pur essendo uno strumento essenziale per la sopravvivenza, porta con sé delle sfide. Il panettiere utilizza i social media per promuovere degustazioni e altri eventi speciali nel negozio, un'attività che, se da un lato amplia la visibilità e rafforza il legame con la comunità locale, dall'altro rischia di ridurre l'unicità dell'esperienza diretta che il negozio può offrire. La presenza online, infatti, pur essendo una risorsa preziosa, può creare un filtro che distorce la percezione immediata e tangibile dei prodotti, una dimensione che rimane irripetibile nel contesto virtuale. In questo equilibrio delicato, il negozio deve navigare tra il mantenimento dell'esperienza autentica e personale, caratteristica del commercio tradizionale, e l'adozione di strategie digitali che rischiano di standardizzare e depersonalizzare l'esperienza di acquisto "
        textTitle="Sopravvivere e Competere nell'era Digitale"
        sezioneId="sezione2"
        sezioneEnd="paragrafoEnd"/>

        <Paragrafo text="E infine, l'agricoltore che si affida all'agricoltura di precisione e alla tecnologia per migliorare la sostenibilità e l'efficienza. Questo approccio potrebbe essere visto come un tradimento dell'ethos tradizionale dell'agricoltura, dove il rapporto diretto con la terra e le sue stagioni ha sempre avuto un valore intrinseco.
        In questo contesto, ci troviamo di fronte a una domanda cruciale: stiamo sacrificando troppo nel nostro slancio verso l'efficienza e la connettività? La risposta non è semplice e richiede una riflessione profonda su cosa valutiamo di più nella nostra società. Forse il futuro richiederà un equilibrio più riflessivo, dove tecnologia e tradizione possono coesistere senza che una sovrasti l'altra, permettendo agli artigiani di mantenere la loro identità unica mentre navigano le acque turbolente del progresso digitale.
        Attraverso questa evoluzione, i mestieri tradizionali non solo sopravviveranno ma potrebbero emergere rinnovati, arricchiti dalla tecnologia ma ancora profondamente umani nel loro nucleo. Questo è il futuro che possiamo sperare di costruire, un futuro in cui l'innovazione serve l'umanità, e non viceversa. "
        textTitle="Un Futuro Rinnovato: Tecnologia e Tradizione che Coesistono"
        sezioneId="sezione"/>

        <div className="divisore">
            <div className="colonna">
                <div className="row">
                <Link to="/Falegname">
                    <div class="cardJob" id="cardJob1">
                        <p class="c-txt">Falegname</p>
                    </div>
                </Link>
                </div>
                <div className="row">
                <Link to="/Calzolaio">
                    <div class="cardJob" id="cardJob2">
                        <p class="c-txt">Calzolaio</p>
                    </div>
                </Link>
                </div>
            </div>

            <div className="colonna">
                <div className="row">
                <Link to="/Pellettiere">
                    <div class="cardJob" id="cardJob3">
                        <p class="c-txt">Pellettiere</p>
                    </div>
                </Link>
                </div>
                <div className="row">
                <Link to="/Agricoltore">
                    <div class="cardJob" id="cardJob4">
                        <p class="c-txt">Agricoltore</p>
                    </div>
                </Link>
                </div>
            </div>

            <div className="colonna">
                <div className="row">
                <Link to="/Panettiere">
                    <div class="cardJob" id="cardJob5">
                        <p class="c-txt">Panettiere</p>
                    </div>
                </Link>
                </div>
                <div className="row">
                <Link to="/Costruttore">
                    <div class="cardJob" id="cardJob6">
                        <p class="c-txt">Costruttore</p>
                    </div>
                </Link>
                </div>
            </div>
        </div>

        <Paragrafo text="lorem "
        textTitle=" titolooo"
        sezioneId=""/>

        <Footer onScroll={scrollToParagraph}/>

    </div>  
    );
  }
  
  export default JobsList;
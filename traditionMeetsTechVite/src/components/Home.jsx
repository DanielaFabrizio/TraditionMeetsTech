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

      
      <Paragrafo text="La digitalizzazione e lo sviluppo dell'informatica rappresentano una delle più grandi rivoluzioni tecnologiche degli ultimi decenni. Questi cambiamenti hanno influenzato ogni aspetto della società, ma forse nessun settore è stato colpito più del mondo del lavoro. Questo studio esplora l'impatto della digitalizzazione e dello sviluppo informatico sul lavoro in generale, con un focus particolare sui mestieri tradizionali, analizzando le opportunità e le sfide create da questa trasformazione."
        textTitle="La digitalizzazione e lo sviluppo dell'informatica: Impatto sul mondo del lavoro"
        sezioneId="sezione"/>

      <Paragrafo text="La digitalizzazione, spesso denominata come la quarta rivoluzione industriale o Industria 4.0, ha introdotto tecnologie avanzate come l'Internet delle cose (IoT), l'intelligenza artificiale (IA), la robotica, e il machine learning nei processi produttivi. Queste tecnologie hanno permesso una maggiore automazione, riduzione dei costi operativi e miglioramenti significativi nell'efficienza produttiva.
        L'industria 4.0 ha reso possibile l'uso di sistemi cyber-fisici, che combinano i processi fisici con i sistemi computazionali, permettendo un monitoraggio in tempo reale e una gestione ottimizzata della produzione. Ad esempio, i sensori IoT possono raccogliere dati dalle macchine per prevedere guasti e programmare manutenzioni preventive, riducendo i tempi di inattività e migliorando la produttività complessiva."
        textTitle="Industria 4.0 e Automazione"
        sezioneId="sezione2"
        sezioneEnd="paragrafoEnd"/>

      <Paragrafo text="Il cloud computing ha rivoluzionato il modo in cui le aziende gestiscono e memorizzano i dati. Grazie al cloud, le imprese possono accedere a risorse computazionali e di archiviazione scalabili on-demand, riducendo la necessità di costose infrastrutture IT interne. Inoltre, l'analisi dei big data permette alle aziende di ottenere insights approfonditi sulle operazioni aziendali, sulle preferenze dei clienti e sulle tendenze di mercato, migliorando la capacità decisionale e la competitività."
        textTitle="Cloud Computing e Big Data"
        sezioneId="sezione"/>

      <Paragrafo text="La digitalizzazione ha anche facilitato la diffusione del lavoro flessibile e del telelavoro. Le piattaforme di collaborazione online, come Microsoft Teams e Slack, insieme ai servizi di videoconferenza come Zoom, hanno permesso ai dipendenti di lavorare da remoto con la stessa efficienza del lavoro in ufficio. Questo ha portato a una migliore conciliazione tra vita lavorativa e personale per molti lavoratori, ma ha anche introdotto nuove sfide, come la gestione del tempo e la necessità di stabilire confini chiari tra lavoro e vita privata."
        textTitle="Lavoro Flessibile e Telelavoro"
        sezioneId="sezione3"/>

      <Paragrafo text="La digitalizzazione ha avuto un impatto significativo sull'agricoltura, trasformandola in un settore sempre più tecnologico. L'uso di droni, sensori e tecnologie di precisione ha migliorato la gestione delle colture, l'uso delle risorse e la produttività. I droni, ad esempio, possono essere utilizzati per monitorare le condizioni delle colture, applicare pesticidi in modo mirato e raccogliere dati per analisi agronomiche.
      Nel settore artigianale, le tecnologie digitali hanno permesso la creazione di nuovi strumenti e tecniche di produzione. Le stampanti 3D, ad esempio, consentono agli artigiani di progettare e produrre pezzi unici con grande precisione, riducendo i tempi e i costi di produzione. Tuttavia, l'adozione di queste tecnologie richiede competenze specifiche, che non tutti gli artigiani possiedono, creando una barriera all'ingresso per alcuni lavoratori."
        textTitle="Effetti sui mestrieri tradizionali"
        sezioneId="sezione"
        sezioneEnd="paragrafoEnd"/>


      <div  id="sezione" className='sezione'>

        <div class="demo coursemeal">
            <div class="coursemeal__div ">
                
                <picture className="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://www.grandvintage.it/media/catalog/product/cache/470434027cf533a4d2808840ace2ec46/p/h/phpHcPADu.jpeg"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg"/>
                    <img src="https://www.grandvintage.it/media/catalog/product/cache/470434027cf533a4d2808840ace2ec46/p/h/phpHcPADu.jpeg" alt="Falegname"/>
                </picture>     
                
                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Falegname 1800</a>
                </div>
            </div>

            <div class="coursemeal__div">
                
                <picture class="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://www.ilponte.com/wp-content/uploads/2022/05/Falegnameria.jpg"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg"/>
                    <img src="https://www.ilponte.com/wp-content/uploads/2022/05/Falegnameria.jpg" alt="Main Course"/>
                </picture> 

                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Nel 2000</a>
                </div>            
            </div>

            <div class="coursemeal__div">
                
                <picture class="responsive-img">
                    <source media="(min-width: 992px)" srcset="https://www.homag.com/fileadmin/_processed_/2/c/csm_Digitalization-for-carpenters-and-woodworking-shops-Apps-and-assistants-from-HOMAG_6d62289de6.png"/>
                    <source media="(min-width: 767px)" srcset="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg"/>
                    <source srcset="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg"/>
                    <img src="https://www.homag.com/fileadmin/_processed_/2/c/csm_Digitalization-for-carpenters-and-woodworking-shops-Apps-and-assistants-from-HOMAG_6d62289de6.png" alt="Desserts"/>
                </picture>

                <div class="coursemeal-info">
                    <a href="#" class="coursemeal-info__link">Nel 2020</a>
                </div>              
            </div>


          </div>
      </div>

      <Paragrafo text="Il settore manifatturiero ha visto l'introduzione di robot collaborativi, noti come cobot, che lavorano fianco a fianco con gli operai umani. Questi robot sono progettati per essere sicuri e facili da programmare, permettendo loro di svolgere compiti ripetitivi e pericolosi, migliorando la sicurezza sul lavoro e la produttività. L'automazione ha portato a una riduzione dei posti di lavoro tradizionali, ma ha anche creato nuove opportunità per lavori altamente specializzati nella programmazione e manutenzione di questi robot."
        textTitle="Settore Manifatturiero"
        sezioneId="sezione2"/>
    
      <Paragrafo text="La digitalizzazione ha portato a una polarizzazione del mercato del lavoro, creando una divisione tra lavori altamente qualificati e ben retribuiti e lavori meno qualificati e più precari. Questo fenomeno è stato analizzato in numerosi studi, che evidenziano come le competenze digitali siano diventate un fattore determinante per la carriera lavorativa.
                  Uno studio dell'OCSE (Organizzazione per la cooperazione e lo sviluppo economico) ha evidenziato che i lavoratori con competenze digitali avanzate hanno maggiori probabilità di ottenere lavori ben remunerati e stabili, mentre quelli con competenze limitate sono più a rischio di disoccupazione o di impiego in lavori precari. Questa polarizzazione ha portato a un aumento delle disuguaglianze economiche e sociali, rendendo necessarie politiche di formazione e riqualificazione per garantire a tutti i lavoratori l'accesso alle nuove opportunità create dalla digitalizzazione."
        textTitle="Polarizzazione del Mercato del Lavoro"
        sezioneId="sezione"/>

      <Paragrafo text="La digitalizzazione ha anche introdotto nuovi strumenti di monitoraggio e controllo dei lavoratori. Le tecnologie indossabili, come smartwatch e sensori biometrici, vengono utilizzate per monitorare le prestazioni e la salute dei dipendenti. Questi dispositivi possono raccogliere dati su parametri vitali, attività fisica e stress, permettendo ai datori di lavoro di ottimizzare la gestione delle risorse umane e migliorare la produttività. Tuttavia, l'uso di queste tecnologie solleva questioni etiche e di privacy, poiché i lavoratori possono sentirsi costantemente sorvegliati e sotto pressione."
        textTitle="Monitoraggio e Controllo dei Lavoratori"
        sezioneId="sezione3"/>

      <div className="image-paragraph">
         <img src="https://blog.industrialdiscount.it/wp-content/uploads/2021/07/Agricoltura-nessuna-agevolazione-saldo-IMU-per-i-coadiuvanti-.jpg" alt="" />
      </div>

      <Paragrafo text="Per sfruttare appieno le opportunità offerte dalla digitalizzazione, è fondamentale investire nella formazione e nella riqualificazione dei lavoratori. Le competenze digitali devono essere integrate nei programmi educativi e di formazione professionale, e i lavoratori devono essere incoraggiati a sviluppare competenze trasversali come il problem solving, la collaborazione e la gestione dei dati.
                  Programmi di riqualificazione specifici possono aiutare i lavoratori dei settori tradizionali a transizione verso ruoli in cui le competenze digitali sono essenziali. Ad esempio, corsi di formazione in programmazione, gestione dei dati e manutenzione dei sistemi robotici possono offrire nuove opportunità a coloro i cui lavori sono stati automatizzati."
        textTitle="Formazione e Riqualificazione"
        sezioneId="sezione2"/>
      
      <Paragrafo text="La digitalizzazione e lo sviluppo dell'informatica hanno trasformato radicalmente il mondo del lavoro, influenzando tutti i settori e mestieri.
                  Mentre molte professioni tradizionali sono state automatizzate o trasformate, nuove opportunità stanno emergendo, creando una dinamica di cambiamento.
                  L'implementazione di politiche adeguate può aiutare a garantire che i benefici della digitalizzazione siano equamente distribuiti e che i lavoratori possano adattarsi alle nuove realtà del mercato del lavoro. Investire in formazione e riqualificazione, migliorare le protezioni sociali per i lavoratori su piattaforma e promuovere l'innovazione sono passi cruciali per affrontare le sfide e sfruttare le opportunità offerte dalla digitalizzazione.
                  A supporto di questo studio abbiamo intervistato alcuni imprenditori per conoscere il loro punto di vista e vedere come il loro mestiere 'tradizionale' si è evoluto nel tempo."
        textTitle="Conclusione"
        sezioneId="sezione"/>
      
      <div id='button-studio'>
      <Link to="/jobs-list" className="cta">
       
            <span class="hover-underline-animation"> Vai allo studio </span>
            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
              <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
            </svg>
      
      </Link>
      </div>

      <Footer onScroll={scrollToParagraph}/>

    </div>  
    );
  }
  
  export default Home;
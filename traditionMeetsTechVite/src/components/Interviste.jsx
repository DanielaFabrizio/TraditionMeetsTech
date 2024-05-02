import './interviste.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Header from './Header.jsx';
import Paragrafo from './Paragrafo.jsx';
export default function Interviste({props}){
   
    return ( 
      <div className="body">
        <Header 
        urlBackground='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXK0LlzC4X5sn_v2mKFXaiWHeMH9bFDcOOw&s'/>
        
        <Paragrafo text="testo"
        textTitle="titolo"
        sezioneId="sezione"/>

        <div className='contIntervista'>
          <div className='elementiIntervista'>
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
            <li></li>
            </div>
        </div>
      
      
      
      
      
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
        // </div> */}

      </div> 

    );
}


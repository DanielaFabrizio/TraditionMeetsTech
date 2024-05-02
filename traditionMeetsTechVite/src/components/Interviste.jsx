import './interviste.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
function Interviste(){
   

    return ( 
        <div>
          <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab>Falegname</Tab>
            <Tab>Fabbrica</Tab>
            <Tab>Calzolaio</Tab>
            <Tab>Agricoltore</Tab>
            <Tab>Alimentari</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Falegname</p>
            </TabPanel>
            <TabPanel>
              <p>Fabbrica</p>
            </TabPanel>
            <TabPanel>
              <p>Calzolaio</p>
            </TabPanel>
            <TabPanel>
              <p>Agricoltore</p>
            </TabPanel>
            <TabPanel>
              <p>Alimentari</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </div>
    );
}

export default Interviste;
import './interviste.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
function Interviste(){
   

    return ( 
        <div>
   <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </div>
    );
}

export default Interviste;
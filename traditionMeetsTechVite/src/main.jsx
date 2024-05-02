import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa il file CSS di Bootstrap
import './index.css'
import Router from './router/Router.jsx'
//import {ChakraProvider, extendBaseTheme, theme as chakraTheme} from '@chakra-ui/react';

// const {Button} = chakraTheme.components

// const theme= extendBaseTheme({
//   components:{
//     Button,
//   }
// })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <ChakraProvider> Aggiungi ChakraProvider qui */}
    <Router/>
  {/* </ChakraProvider> */}
</React.StrictMode>

)

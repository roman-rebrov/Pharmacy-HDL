import React from 'react'
import { BrowserRouter as Router,  } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

// ----
// import './App.css';
// import {State} from './Types/types'
// import './index.css';
// ----

const App : React.FC = ( ) => {
  return (
      <div className="App">
        <Router>
            <HeaderContainer/>
            <Content/>  
            <Footer/>
        </Router>
      </div>
  )
}

export default App;

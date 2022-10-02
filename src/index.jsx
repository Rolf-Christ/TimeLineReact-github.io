import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './style/GlobalStyle'
import { Header } from './components/Header'
import TimeLine from './components/TimeLine'
import { Footer } from './components/Footer'
import { InfoLine } from './components/InfoLine'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <TimeLine />
    <InfoLine/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
)

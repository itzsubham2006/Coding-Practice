import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import Login, {Register} from './components/UserComponent.jsx'
import Header, { Photos, Points, Click } from './components/practice.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login></Login> */}
    {/* <Register></Register> */}
    <App />
    {/* <Header></Header>
    <Photos></Photos>
    <Points></Points>
    <Click></Click> */}

  </StrictMode>,
)

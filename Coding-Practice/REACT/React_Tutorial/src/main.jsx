import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import Login, {Register} from './components/UserComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login></Login>
    <Register></Register>
    {/* <App /> */}
  </StrictMode>,
)

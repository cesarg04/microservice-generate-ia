import { BrowserRouter } from "react-router-dom"
import MainRouter from "./router/index.router"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <div className="bg-gray-100 h-screen" >
      <BrowserRouter>
        <MainRouter />
        <ToastContainer position="top-right" />
      </BrowserRouter>
    </div>
  )
}

export default App

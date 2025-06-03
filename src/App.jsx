import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './ADOP/AuthContex';
import Footer from './ADOP/FooterPage/Footer';
import Navbar from './ADOP/Navbar/Navbar';
import Routers from './ADOP/Routers';
import './App.css';
function App() {
  

  return (
    <>
      <AuthProvider>
      <Navbar/>
      <Routers/>
      <Footer/>
      <ToastContainer/>
      </AuthProvider>
    </>
  )
}

export default App
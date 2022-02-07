import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Navbar from './components/Navigation/Nav';
import Body from './components/Body/Body';

function App() {
  return (
   
      <div className='dark:bg-slate-900 h-screen '>
      
          <Navbar />
          <Body />

          <ToastContainer autoClose={3000}/>
        
      </div>
 
  );
}

export default App;

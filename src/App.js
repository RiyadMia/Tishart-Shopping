 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Abouts/About';
import Heder from './components/Heder/Heder';
import Home from './components/Home/Home'
import Order from './components/Order/Order'
function App() {

    return(
  <div className='App'>
    <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/about'element={<About></About>}></Route>
      </Routes>
 </div>
      )
    }
export default App;

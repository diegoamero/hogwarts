import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters'
import Houses from './pages/Houses/Houses'
import Professors from './pages/Professors/Professors'
import Students from './pages/Students/Students'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='characters' element={<Characters/>}/>
        <Route path='professors' element={<Professors/>}/>
        <Route path='houses' element={<Houses/>}/>
        <Route path='students' element={<Students/>}/>
      </Routes>
    </div>
  );
}

export default App;

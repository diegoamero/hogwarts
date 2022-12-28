import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CharactersPage from './pages/Characters/CharactersPage'
import CharactersHouse from './pages/CharactersHouse/CharactersHouse';
import Houses from './pages/Houses/Houses'
import Professors from './pages/Professors/Professors'
import StudentsPage from './pages/Students/StudentsPage'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='characters' element={<CharactersPage/>}/>
        <Route path='characters/:house' element={<CharactersHouse/>}/>
        <Route path='professors' element={<Professors/>}/>
        <Route path='houses' element={<Houses/>}/>
        <Route path='students' element={<StudentsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

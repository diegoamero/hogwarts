import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CharactersPage from './pages/Characters/CharactersPage'
import CharactersHouse from './pages/CharactersHouse/CharactersHouse';
import Houses from './pages/Houses/Houses'
import StudentsPage from './pages/Students/StudentsPage'
import ProfessorsPage from './pages/Professors/ProfessorsPage';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='characters' element={<CharactersPage/>}/>
        <Route path='professors' element={<ProfessorsPage/>}/>
        <Route path='houses' element={<Houses/>}/>
        <Route path='houses/:house' element={<CharactersHouse/>}/>
        <Route path='students' element={<StudentsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

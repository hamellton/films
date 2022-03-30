import './App.css';
import Films from './Components/Films/Films';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import SearchInput from './Components/SearchInput/SearchInput';
import StatusRequestBlock from './Components/StatusRequestBlock/StatusRequestBlock';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className='container'>
        <SearchInput />
        <Films />
      </div>
      <StatusRequestBlock />
    </div>
  );
}

export default App;

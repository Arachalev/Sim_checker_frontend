import './App.css';
import Navbar from './Components/Navbar';
import SearchForm from './Components/SearchForm';
import Steps from './Components/Steps';

function App() {
  return (
    <div className='App text-dark_purple bg-light_blue'>
      <div className=" max-w-[1440px] w-[90%] md:w-[80%] mx-auto py-7">
        <Navbar/>
        <SearchForm/>
        <Steps/>
      </div>
    </div>
  );
}

export default App;

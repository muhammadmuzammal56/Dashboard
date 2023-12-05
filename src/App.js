import './App.css'
import RightSide from './Component/RightSide/RightSide';
import Sidebar from './Component/Sidebar/Sidebar';
import MainDash from './MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
       <MainDash/>
        <RightSide/>

      </div>
    </div>
  );
}

export default App;

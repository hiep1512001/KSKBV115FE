
import './App.css';
import Dashboard from './Components/Dashboar';
import Menu from './Components/Menu';
import TrangChu from './pages/TrangChu';


const App = () => {
  return (
    <div className='container-fluid' >
      <div className='row'>
        <Menu></Menu>
      </div>
      <div className='container mt-2'>
        <TrangChu></TrangChu>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default App;

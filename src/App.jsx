import Navbar from './Componentes/Navbar/navbar.jsx'
import Dishes from './Componentes/Platos/Dishes.jsx';
import Home from './Componentes/casa/Home.jsx'


function App() {

 
  
  

  return (
    <div>

    <Navbar/>
    
    <main>
      <div id='Home'>
        <Home/>
      </div>

      <div id='Dishes'>
        <Dishes/>
      </div>
    </main>
    
    </div>

  );
}

export default App

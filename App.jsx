import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './Cuerpo';
import Pie from './Pie';
import Lateral from './Lateral';



const news = [
    {title: 'Nuevo invento para viajes al espacio', category: 'Ciencia', image: 'https://imageurl.com'},
    { title: 'Gatitos ganan premio internacional', category: 'Mascotas', image: 'https://imageurl2.com'},
    {title: 'Presidente firma ley de educación', category: 'Política', image: 'https://imageurl3.com'}
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todo');

  const setSelected = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div className="App">
       <header className='cabecera'>
          <h1>Santa Lucia Informa</h1>
          <h3>El diario Digital de los Santaluceños</h3>
    
       </header>
      
       <nav>
     
          <ul>
              <li onClick={() => setSelected('Todo')}>Todo</li>
              <li onClick={() => setSelected('obras')}>Obras</li>
              <li onClick={() => setSelected('educacion')}>Educación</li>
              <li onClick={() => setSelected('Deporte')}>Deporte</li>
          </ul>
       </nav>
      
      <main className='cuerpo'>
    
        < Cuerpo/>
        < Lateral/>
      </main>

      <footer className='pie'>
      < Pie/>
      </footer>
      
    </div>
  );
}

export default App;
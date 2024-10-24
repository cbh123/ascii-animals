import { useState } from 'react';
import './App.css';

const asciiArt = {
  cat: `
   /\\___/\\
  (  o o  )
  (  =^=  ) 
   (______)`,
  
  dog: `
    /)___/)
   (  ´・_・)
   /     づ
  │    │  │
  (＿＿┘  ＼`,
  
  rabbit: `
   /\\ /\\
  ((.Y.))
   (u u)`,
  
  penguin: `
    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'\\_   _/\`\\
\\___)=(___/`
};

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState('cat');

  return (
    <div className="App">
      <h1>ASCII Art Animals</h1>
      <div className="controls">
        <select 
          value={selectedAnimal} 
          onChange={(e) => setSelectedAnimal(e.target.value)}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="rabbit">Rabbit</option>
          <option value="penguin">Penguin</option>
        </select>
      </div>
      <pre className="ascii-art">
        {asciiArt[selectedAnimal]}
      </pre>
    </div>
  );
}

export default App;
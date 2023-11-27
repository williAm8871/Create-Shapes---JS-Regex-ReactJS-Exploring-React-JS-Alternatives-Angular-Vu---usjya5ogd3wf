import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [Value, setValue] = useState('square');
  const [shap, setShape] = useState([]);
  function handleclick() {
    setShape((prev) => {
      return [...prev, setValue];
    })
  }
  return (
    <div id="main">
      <div id="shape-creator">
        <select value={Value} onChange={(e) => setValue(e.target.vale)}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleclick}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {
          shap.map((shap,index)=>{
            <div key={index} className={shap == 'square' ? 'square':'circle'}></div>
          })
        }
      </div>
    </div>
  )
}


export default App;

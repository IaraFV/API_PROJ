//import logo from './logo.svg';  <img src={logo} className="App-logo" alt="logo" />
import { useState } from 'react';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import './App.css';

let initialState = [
  {
    id:1,
    descricao: 'Primeira Atividade',
   // id_projetos: 1,
  },
  {
    id:2,
    descricao: 'Segunda Atividade',
    //id_projetos: 2,
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState)

  
  function addAtividade(e){
    e.preventDefaul();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
      //id_projetos: document.getElementById('id_projetos').value,
    };
    atividades.push(atividade);
    console.log(atividades);
    setAtividades([...atividades]);
  }
//<input id="id_projetos" type="text" placeholder="id_projetos"/>
  return (
    <>
      <form>
        <input id="id" type="text" placeholder="id"/>
        <input id="descricao" type="text" placeholder="descricao"/>
        <button onClick={addAtividade}> Salvar Tarefa</button>
       </form>
      <div className="mt-3">
        <ul className="list-group">
          {atividades.map(ativ =>(
            <li key={ativ.id} className="list-group-item">{ativ.id} - {ativ.descricao}</li> 
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

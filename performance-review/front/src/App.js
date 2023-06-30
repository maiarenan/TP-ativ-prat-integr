import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Questao from './components/Questao';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [questao, setQuestao] = useState(null);
  const [questoes, setQuestoes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUserSelect = async (userId) => {
    try {
      const usuario = await axios.get(`http://localhost:3001/users/${userId}`)
      const questoes = await axios.get(`http://localhost:3001/questoes/${usuario.data[0].perfil_id}`)
      setQuestoes(questoes.data)
      console.log(questoes)
      setSelectedUser(usuario.data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = [...formData.entries()];
    console.log(values);
  }

  // const handleQuestao = (idQuestao) => {
  //   axios.get(`http://localhost:3001/questao/${idQuestao}`)
  //     .then(response => {
  //       setQuestao(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };


  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => handleUserSelect(user.id)}>
            {user.nome}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>Selected User: {selectedUser.nome} </h2>
          <form onSubmit={handleSubmit}>
            {questoes.map(questao => (
              <Questao opt={questao.opt} key={questao.id} enunciadoId={questao.id} enunciado={questao.enunciado} />
            )
            )}
            <button type="submit">Submit</button>

          </form>
        </div>
      )}
    </div>
  );
}

export default App;



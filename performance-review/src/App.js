import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { response } from 'express';

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleUserSelect = (userId) => {
        axios.get(`http://localhost:3000/users/${userId}`)
            .then(response => {
                setSelectedUser(response.data[0]);
                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            });
    };
    const handleQuestao = (idQuestao) => {
        axios.get(`http://localhost:3000/questao/${idQuestao}`)
            .then(response =>{
                setQuestao(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div>
            <h1>Users</h1>
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
                    {questao ? (
                        <div>
                            <h3>Questão: {questao.id}</h3>
                            {selectedUser.perfil_id}
                            <p>Enunciado: {questao.enunciado}</p>
                        </div>
                    ) : (
                        <p>Loading questão...</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import PerformanceReview from './performanceReview';

// function App() {
//   return (
//     <PerformanceReview />
//   );
// }

// export default App;

import React, { useState } from "react";

function PerformanceReview() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [comment, setComment] = useState("");

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const submitAnswer = () => {
    console.log("Resposta:", selectedAnswer);
    console.log("Comentário:", comment);

    // Aqui você pode enviar a resposta e o comentário para um servidor ou executar qualquer outra lógica necessária

    // Limpar os campos após salvar
    setSelectedAnswer("");
    setComment("");
  };
}
//   return (
//     <div>
//       <h1>Exemplo de Pergunta e Resposta</h1>

//       <div>
//         <label htmlFor="question">AVALIAÇÃO DO QUESITO 1 2 3 4</label>
//       </div>

//       <div>
//         <label htmlFor="answer"></label>
//         <div id="answerOptions">
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao1"
//               value="Opção 1"
//               checked={selectedAnswer === "Opção 1"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao1">Não atende às expectativas</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao2"
//               value="Opção 2"
//               checked={selectedAnswer === "Opção 2"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao2">Precisa Melhorar</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao3"
//               value="Opção 3"
//               checked={selectedAnswer === "Opção 3"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao3">Atendeu às expectativas</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao4"
//               value="Opção 4"
//               checked={selectedAnswer === "Opção 4"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao4">Superou as expectativas</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao5"
//               value="Opção 5"
//               checked={selectedAnswer === "Opção 5"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao5">Excepcional</label>
//           </div>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="comment">Comentário:</label>
//         <textarea
//           id="comment"
//           rows="4"
//           cols="50"
//           placeholder="Digite seu comentário"
//           value={comment}
//           onChange={handleCommentChange}
//         ></textarea>
//       </div>

//       <div>
//         <label htmlFor="question">Pergunta:</label>
//         <input
//           type="text"
//           id="question"
//           readOnly
//           value="Qual é a sua cor favorita?"
//         />
//       </div>

//       <div>
//         <label htmlFor="answer">Resposta:</label>
//         <div id="answerOptions">
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao1"
//               value="Opção 1"
//               checked={selectedAnswer === "Opção 1"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao1">Opção 1</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao2"
//               value="Opção 2"
//               checked={selectedAnswer === "Opção 2"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao2">Opção 2</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao3"
//               value="Opção 3"
//               checked={selectedAnswer === "Opção 3"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao3">Opção 3</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao4"
//               value="Opção 4"
//               checked={selectedAnswer === "Opção 4"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao4">Opção 4</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao5"
//               value="Opção 5"
//               checked={selectedAnswer === "Opção 5"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao5">Opção 5</label>
//           </div>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="comment">Comentário:</label>
//         <textarea
//           id="comment"
//           rows="4"
//           cols="50"
//           placeholder="Digite seu comentário"
//           value={comment}
//           onChange={handleCommentChange}
//         ></textarea>
//       </div>

//       <div>
//         <label htmlFor="question">Pergunta:</label>
//         <input
//           type="text"
//           id="question"
//           readOnly
//           value="Qual é a sua cor favorita?"
//         />
//       </div>

//       <div>
//         <label htmlFor="answer">Resposta:</label>
//         <div id="answerOptions">
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao1"
//               value="Opção 1"
//               checked={selectedAnswer === "Opção 1"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao1">Opção 1</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao2"
//               value="Opção 2"
//               checked={selectedAnswer === "Opção 2"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao2">Opção 2</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao3"
//               value="Opção 3"
//               checked={selectedAnswer === "Opção 3"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao3">Opção 3</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao4"
//               value="Opção 4"
//               checked={selectedAnswer === "Opção 4"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao4">Opção 4</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao5"
//               value="Opção 5"
//               checked={selectedAnswer === "Opção 5"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao5">Opção 5</label>
//           </div>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="comment">Comentário:</label>
//         <textarea
//           id="comment"
//           rows="4"
//           cols="50"
//           placeholder="Digite seu comentário"
//           value={comment}
//           onChange={handleCommentChange}
//         ></textarea>
//       </div>

//       <div>
//         <label htmlFor="question">Pergunta:</label>
//         <input
//           type="text"
//           id="question"
//           readOnly
//           value="Qual é a sua cor favorita?"
//         />
//       </div>

//       <div>
//         <label htmlFor="answer">Resposta:</label>
//         <div id="answerOptions">
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao1"
//               value="Opção 1"
//               checked={selectedAnswer === "Opção 1"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao1">Opção 1</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao2"
//               value="Opção 2"
//               checked={selectedAnswer === "Opção 2"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao2">Opção 2</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao3"
//               value="Opção 3"
//               checked={selectedAnswer === "Opção 3"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao3">Opção 3</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao4"
//               value="Opção 4"
//               checked={selectedAnswer === "Opção 4"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao4">Opção 4</label>
//           </div>
//           <div className="answer-option">
//             <input
//               type="radio"
//               name="answer"
//               id="opcao5"
//               value="Opção 5"
//               checked={selectedAnswer === "Opção 5"}
//               onChange={handleAnswerChange}
//             />
//             <label htmlFor="opcao5">Opção 5</label>
//           </div>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="comment">Comentário:</label>
//         <textarea
//           id="comment"
//           rows="4"
//           cols="50"
//           placeholder="Digite seu comentário"
//           value={comment}
//           onChange={handleCommentChange}
//         ></textarea>
//       </div>

//       <button onClick={submitAnswer}>Enviar</button>
//     </div>
//   );
// }

export default PerformanceReview;

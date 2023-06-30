import React from 'react'

const Questao = ({ enunciado, enunciadoId, opt }) => {
    return (
        <div>
            <label>
                {enunciado}
            </label>
            {
                opt.map(opc => (
                    <div key={opc.id}>
                        <input type="radio" name={enunciadoId} value={opc.id} />
                        <label >
                            {opc.nome}
                        </label>
                    </div>
                ))
            }
            <input type="text" name={enunciadoId} />
        </div>
    )
}

export default Questao
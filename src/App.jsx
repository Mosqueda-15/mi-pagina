import { useState } from 'react'
import './App.css'

const tarjeta = [
  { id: 1, nombre: 'Tarjeta 1', descripcion: 'Descripción de la tarjeta 1' },
  { id: 2, nombre: 'Tarjeta 2', descripcion: 'Descripción de la tarjeta 2' },
  { id: 3, nombre: 'Tarjeta 3', descripcion: 'Descripción de la tarjeta 3' },
  { id: 4, nombre: 'Tarjeta 4', descripcion: 'Descripción de la tarjeta 4' },
  
]

const filas = [
  { id: 1, nombre: 'Fila 1', descripcion: 'Descripción de la fila 1' },
  { id: 2, nombre: 'Fila 2', descripcion: 'Descripción de la fila 2' },
  { id: 3, nombre: 'Fila 3', descripcion: 'Descripción de la fila 3' },
  { id: 4, nombre: 'Fila 4', descripcion: 'Descripción de la fila 4' },
  { id: 5, nombre: 'Fila 5', descripcion: 'Descripción de la fila 5' },
]

function App() {
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedRow, setSelectedRow] = useState(null)

  return (
    <div className="App">
      <header className="header">
        <h1>Mi Página</h1>
        <p>Selecciona una tarjeta o una fila</p>
      </header>

      <main className="contenedor">
        <h2>Tarjetas</h2>
        <div className="card-container">
          {tarjeta.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCard === card ? 'selected' : ''}`}
              onClick={() => setSelectedCard(card)}
            >
              <span className="icono">{card.icono}</span>
              <h3>{card.nombre}</h3>
              <p>{card.descripcion}</p>
            </div>
          ))}
        </div>

        <h2>Tabla</h2>
        <div className="scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((row) => (
                <tr
                  key={row.id}
                  className={selectedRow === row ? 'selected' : ''}
                  onClick={() => setSelectedRow(row)}
                >
                  <td>{row.id}</td>
                  <td>{row.nombre}</td>
                  <td>{row.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="seleccion">
          Tarjeta: <b>{selectedCard ? selectedCard.nombre : 'ninguna'}</b> | Fila:{' '}
          <b>{selectedRow ? selectedRow.nombre : 'ninguna'}</b>
        </p>
      </main>
    </div>
  )
}

export default App
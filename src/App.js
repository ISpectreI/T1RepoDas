import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    // Abrir una nueva pestaña  commmmmiiiiit 2
    const newTab = window.open('', '_blank');

    setTimeout(() => {
      setSubmitting(false);

      // Mostrar los datos en la nueva pestaña
      newTab.document.write(`
        <h1>Datos Ingresados</h1>
        <ul>
          <li><strong>Nombres:</strong> ${formData.name}</li>
          <li><strong>Apellidos:</strong> ${formData2.ape}</li>
          <li><strong>Fecha de Nacimiento:</strong> ${formData2.fechaNacimiento}</li>
          <li><strong>Dirección:</strong> ${formData2.direccion}</li>
          <li><strong>Teléfono:</strong> ${formData2.telefono}</li>
        </ul>
      `);

      // Cerrar la nueva pestaña después de 7 segundos
      setTimeout(() => {
        newTab.close();
      }, 7000);

    }, 5000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="estilo">
      <h1>Usando formularios y eventos en React</h1>
      {submitting &&
       <div>
         Tu realizaste Submit para la siguiente información:
         <ul>
           <li><strong>Nombres</strong>: {formData.name}</li>
           <li><strong>Apellidos</strong>: {formData2.ape}</li>
           <li><strong>Fecha de Nacimiento</strong>: {formData2.fechaNacimiento}</li>
           <li><strong>Dirección</strong>: {formData2.direccion}</li>
           <li><strong>Teléfono</strong>: {formData2.telefono}</li>
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Nombres</p>
            <input name="name" onChange={handleChange}/>
          </label>
          <label>
            <p>Apellidos</p>
            <input name="ape" onChange={handleChange2}/>
          </label>
          <label>
            <p>Fecha de Nacimiento</p>
            <input name="fechaNacimiento" type="date" onChange={handleChange2}/>
          </label>
          <label>
            <p>Dirección</p>
            <input name="direccion" onChange={handleChange2}/>
          </label>
          <label>
            <p>Teléfono</p>
            <input name="telefono" onChange={handleChange2}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

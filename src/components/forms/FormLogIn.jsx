import React from 'react';
import useForm from '../../hooks/useForm';

const FormLogIn = () => {
  const { values, handleChange, reset } = useForm({ name: '', pswd: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);//POST TO API
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario:</label>
        <input type="text" name="name" value={values.name} onChange={handleChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="pswd" value={values.pswd} onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormLogIn;
import React from 'react';
import useForm from '../../hooks/useForm';

const FormContact = ({props}) => {
  const { values, handleChange, reset } = useForm({ contact: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getMsgToSend({values});
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Remitente:</label>
        <input type="email" name="contact" value={values.contact} onChange={handleChange} />
      </div>
      <div>
        <label>Mensaje:</label>
        <input type="text" name="message" value={values.message} onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormContact;
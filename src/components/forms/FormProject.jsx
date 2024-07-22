import React from 'react';
import useForm from '../../hooks/useForm';

const FormProject = ({project}) => {
    const initialValues = project
        ? project
        :{ name: '', link: '',description: ''}

    const { values, handleChange, reset } = useForm(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values); // TO API
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Proyecto :</label>
            <input type="text" name="name" value={values.name} onChange={handleChange} />
        </div>
        <div>
            <label>Repositorio :</label>
            <input type="url" name="link" value={values.link} onChange={handleChange} />
        </div>
        <div>
            <label>Descripción :</label>
            <input type="text" name="description" value={values.description} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
        </form>
    );
};

export default FormProject;
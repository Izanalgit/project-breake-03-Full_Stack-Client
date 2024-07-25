import React from 'react';
import useForm from '../../hooks/useForm';

const FormProject = ({props}) => {
    const initialValues = props.project
        ? { 
            name: props.project.name, 
            link: props.project.link ,
            description: props.project.description
        }
        :{ name: '', link: '',description: ''}

    const { values, handleChange, reset } = useForm(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getProject(values)
        reset();
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
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
            <textarea name="description" value={values.description} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
        </form>
    );
};

export default FormProject;
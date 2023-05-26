import styles from '../project/ProjectForm.module.css';
import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

const ServiceForm = ({ handleSubmit, textBtn, projectData }) => {
  const [service, setService] = useState({});

  const submit = (e) => {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  };

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <form onSubmit={submit} className={styles.form}>
        <Input
          type="text"
          text="Nome do Serviço"
          name="name"
          placeholder="Insira o nome do serviço"
          handleOnChange={handleChange}
        />
        <Input
          type="number"
          text="Custo do Serviço"
          name="cost"
          placeholder="Insira o valor total"
          handleOnChange={handleChange}
        />
        <Input
          type="text"
          text="Descrição do Serviço"
          name="description"
          placeholder="Descreva o serviço"
          handleOnChange={handleChange}
        />
        <SubmitButton text={textBtn} />
      </form>
    </div>
  );
};

export default ServiceForm;

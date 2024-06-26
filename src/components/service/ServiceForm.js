import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

import styles from "../project/ProjectForm.module.css"

function ServiceForm({ handleSubmit, btnText, projectData, required }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault()
    projectData.services.push(service);
    handleSubmit(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Service name"
        name="name"
        placeholder="Enter service name"
        handleOnChange={handleChange}
        required={required}
      />
      <Input
        type="number"
        text="Service cost"
        name="cost"
        placeholder="Enter the total amount"
        handleOnChange={handleChange}
        required={required}
      />
      <Input
        type="text"
        text="Service description"
        name="description"
        placeholder="Enter service description"
        handleOnChange={handleChange}
        required={required}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ServiceForm;

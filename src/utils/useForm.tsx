import { FormElement } from "@nextui-org/react";
import React, { useState } from "react";

const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e: React.ChangeEvent<FormElement | HTMLFormElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useForm;

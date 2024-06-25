import { ChangeEvent, useEffect, useState } from 'react';

import { ChangeInterface } from '../interfaces/formInputs';

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

type ValidationRules = {
  [key: string]: (value: string) => string | undefined;
};

type FormValidationHookResult = {
  formValues: FormValues;
  formErrors: FormErrors;
  setFormValues: (arg: FormValues) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleBlur: (fieldName: string) => void;
  touchedFields: string[];
  validateForm: () => boolean;
  validateField: (fieldName: string) => void;
};

const useFormValidation = (
  initialValues: FormValues,
  validationRules: ValidationRules,
): FormValidationHookResult => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<string[]>([]);

  const validateForm = (): boolean => {
    let isValid = true;
    const errors: FormErrors = {};

    Object.keys(validationRules).forEach((key) => {
      const validationFn = validationRules[key];
      const value = formValues[key];
      const error = validationFn(value);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const validateField = (fieldName: string): void => {
    const validationFn = validationRules[fieldName];
    const value = formValues[fieldName];
    const error = validationFn(value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value }: ChangeInterface = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    if (!touchedFields.includes(name)) validateField(name);
  };

  const handleBlur = (fieldName: string) => {
    if (!touchedFields.includes(fieldName)) {
      setTouchedFields((prevTouchedFields) => [...prevTouchedFields, fieldName]);
    }
    validateField(fieldName);
  };

  useEffect(() => {
    const fieldsToTouch = Object.keys(initialValues);
    setTouchedFields(fieldsToTouch);
  }, []);

  return {
    formValues,
    setFormValues,
    formErrors,
    handleChange,
    handleBlur,
    touchedFields,
    validateForm,
    validateField,
  };
};

export default useFormValidation;

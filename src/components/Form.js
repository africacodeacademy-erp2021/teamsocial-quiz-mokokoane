import React, { useState } from 'react';
import FormSignup from './LoginForm';
import Welcome from './categories';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Welcome />
        )}
     
    </>
  );
};

export default Form;

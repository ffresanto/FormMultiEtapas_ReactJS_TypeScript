import React from 'react';
import './App.css';
import { FormProvider } from './contexts/FormContext';
import { Router } from './route/router';

const App = () => {
  return (
    <FormProvider>
        <Router />
    </FormProvider>
  );
};

export default App;

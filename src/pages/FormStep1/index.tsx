import * as C from './styles';
import React, { ChangeEvent, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { useNavigate  } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';

export const FormStep1 = () => {
  const navigate = useNavigate(); // const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, []);

  const handleNextStep = () => {

    if (state.name !== '') {
      navigate('/step2') //history.push('/step2');
    } else {
      alert("Preencha os dados");
    }

  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }
  
    return (
        <Layout>
          <C.Container>
          <p>Passo 1/3</p>
          <h1>Vamos começar com seu nome</h1>
          <p>Preencha o campo abaixo com seu nome completo.</p>

          <hr />

          <label>
            Seu nome completo
            <input type="text" autoFocus value={ state.name } onChange={handleNameChange} />
            
          </label>

          <button onClick={handleNextStep} >Próximo</button>

          </C.Container>
        </Layout>
  );
};

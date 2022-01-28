import * as C from './styles';
import React, { ChangeEvent, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { useNavigate  } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
  const navigate = useNavigate(); // const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {

     if (state.name === '') {
      navigate('/');
    }
    else{

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
      
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
      alert('Cadastro Finalizado com Sucesso!');

      navigate('/step1') 

      state.name = '';
      state.email = '';
      state.github = '';
      state.level = 0;

    } else {
      alert('Preencha os dados');
    }


  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }
  
    return (
        <Layout>
          <C.Container>
          <p>Passo 3/3</p>
          <h1>Legal { state.name }, onde te achamos?</h1>
          <p>Preencha com seus dados para entrarmos em contato.</p>

          <hr />

          <label>
            Qual seu e-mail?
            <input type="email" autoFocus value={state.email} onChange={handleEmailChange} />
            
          </label>

           <label>
            Qual seu GitHub?
            <input type="url" value={state.github} onChange={handleGithubChange} />
            
          </label>

          <Link to="/step2" ><button className="backButton">Voltar</button></Link>
          <button onClick={handleNextStep} >Finalizar</button>

          </C.Container>
        </Layout>
  );
};

import * as C from './styles';
import React, { ChangeEvent, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { useNavigate  } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { SelectOption } from '../../components/SelectOption';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
  const navigate = useNavigate(); // const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {

    if (state.name === '') {
      navigate('/');
    }
    else{

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    });
      
    }
  }, []);

  const handleNextStep = () => {

    if (state.name !== '') {
      navigate('/step3') //history.push('/step2');
    } else {
      alert("Preencha os dados");
    }

  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  }
  
    return (
        <Layout>
          <C.Container>
          <p>Passo 2/3</p>
          <h1>{state.name}, o que melhor descreve você?</h1>
          <p>Escolha a opção que melhor define seu estado atual profissionalmente.</p>

          <hr />
          
          <SelectOption
            title="Sou iniciante"
            description="Comecei a programar há menos de 2 anos"
            icon="😀"
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
          />
          
          <SelectOption
            title="Sou programador"
            description="Já programo há algum tempo"
            icon="😎"
            selected={state.level === 1}
            onClick={()=>setLevel(1)}
          />

         <Link to="/" ><button className="backButton">Voltar</button></Link>
          <button onClick={handleNextStep} >Próximo</button>

          </C.Container>
        </Layout>
  );
};

import styled from 'styled-components';

//export const Container = styled.div` `;

export const Container = styled.div` 
    p {
        font-size: 13px;
        color: #B8B8D4
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #323232;
        margin: 30px 0;
    }

    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #a682fc;
            border-radius: 10px 0px 10px 0px;
            color: #fff;
            outline: 0;
            font-size: 15px;
            background-color: #191919
        }
    }

    button {
        background-color: #a682fc;
        color: #fff;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 20px 0px 20px 0px;
        cursor: pointer;
        margin-top: 20px;

        &:hover{
            opacity: 0.8;
        }
    }

  .backButton{
        text-decoration: none;
        background-color: #323232;
        color: #fff;
        font-weight: bold;
        padding: 20px 40px;
        margin-right: 5px;
        border: 0;
        border-radius: 0px 20px 0px 20px;
        cursor: pointer;
        margin-top: 20px;

        &:hover{
            opacity: 0.8;
        }
     }
`;
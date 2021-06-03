import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { withRouter } from "react-router";
import config from '../../config';

// styles

const LoginForm = styled.form`
    background-color: ${(props) => props.theme.altBackgroundColor};
    display:flex;
    flex-direction: column;
    width: 50%;
    justify-items: center;
    align-items: center;
`;

// JSX
function Login(props){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch(config.serverUrl + '/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000/login'},
            body: JSON.stringify(data)
        }).then(response => response.text()).then(console.log);
    };
    return(
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input 
            name="email" placeholder="john.smith@example.com" 
            ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} />
            <label>Password</label>
            <input name="password" placeholder="CorrectHorseBatteryStaple" ref={register({required: true})}/>
            {errors.exampleRequired && <p>This field is required</p>}
            <input type="submit" />
        </LoginForm>
    );
}
export default withRouter(Login)
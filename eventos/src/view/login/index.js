import React, {useState} from 'react';
import './login.css'
import {Link, Redirect} from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado => {
            setMsgTipo('sucesso')
            dispatch({type: 'LOG_IN', usuarioEmail: email })
        }).catch(erro => {
            setMsgTipo('erro')
        });
    }

    return(
        <div className="login-content d-flex align-items-center">

            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}

            <form className="form-signin mx-auto">
            <div className="text-center mb-4">
            <i class="fas fa-theater-masks text-white fa-7x"></i>
                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-bold text-white font-weight-bold">Login</h1>            
            </div>
           
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email"/>   
            <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha"/>
                      
            <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Entrar</button>
            
            <div className="msg-login text-white text-center my-5">
                {msgTipo === 'sucesso' && <span><strong>Uhuul.</strong> Você foi conectado! &#128526;</span>}
                    
                {msgTipo === 'erro' && <span><strong>Opss.</strong> Usuário ou senha incorreto(s)! &#128546;</span>}
            </div>

            <div className="opcoes-login mt-5 text-center">
                <Link to='/usuariorecuperarsenha' className="mx-2">Recuperar Senha</Link>
                <Link to='novousuario' className="mx-2">Novo Cadastro</Link>
            </div>
            </form>
        </div>
    )
}

export default Login;
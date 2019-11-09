import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

const CheckoutForm = () => {
    let history = useHistory();
    const [userName, setUserName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = (userName, password) => {
        console.log(userName);
        console.log(password);
        history.push('/booklist')
    }

    return (
      <div>
        <input type="text" placeholder="Nome Completo" value={userName} onChange={e => setUserName(e.target.value)}/>
        <br />
        <input type="date" placeholder="Data de Nascimento" value={password} onChange={e => setPassword(e.target.value)}/>
        <br />
        <input type="password" placeholder="Email" value={password} onChange={e => setPassword(e.target.value)}/>
        <br />
        <button onClick={() => handleClick(userName, password)}>Finalizar</button>
      </div>
    );
}

export default Login;
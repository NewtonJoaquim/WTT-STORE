import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (userName, password) => {
        console.log(userName);
        console.log(password);
        history.push('/booklist')
    }

    return (
      <div>
        <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)}/>
        <br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <br />
        <button onClick={() => handleClick(userName, password)}>Log In</button>
      </div>
    );
}

export default Login;
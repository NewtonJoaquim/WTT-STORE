import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <div className='main' style={{alignItems:'center', justifyContent:'center'}}>
        <TextField style={{flex:1, padding:10}} type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)}/>
        <br />
        <TextField style={{flex:1, padding:10}} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <br />
        <Button style={{flex:1, padding:10}} variant='outlined' onClick={() => handleClick(userName, password)}>Log In</Button>
      </div>
    );
}

export default Login;
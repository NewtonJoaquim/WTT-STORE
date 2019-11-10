import React from "react";

const CheckoutForm = ({handleClick, userName, birthday, email, setUsername, setBirthday, setEmail}) => {
    // const [userName, setUserName] = useState('');
    // const [birthday, setBirthday] = useState('');
    // const [email, setEmail] = useState('');

    // const handleClick = (userName, birthday, email) => {
    //     console.log(userName);
    //     history.push('/booklist')
    // }

    return (
      <div style={{backgroundColor:'white'}}>
          <label style={{padding:10}}>
              Nome Completo:
        <input type="text" placeholder="Nome Completo" value={userName} onChange={setUsername}/>
        </label>
        <br />
        <label style={{padding:10}}>
            Data de Nascimento: 
        <input type="date" placeholder="Data de Nascimento" value={birthday} onChange={setBirthday}/>
        </label>
        <br />
        <label style={{padding:10}}>
            Email: 
        <input type="text" placeholder="Email" value={email} onChange={setEmail}/>
        </label>
        <br />
        <button onClick={handleClick}>Finalizar</button>
      </div>
    );
}

export default CheckoutForm;
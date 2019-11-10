import React from "react";

const CheckoutForm = ({ handleClick, userName, birthday, email, setUsername, setBirthday, setEmail }) => {
    // const [userName, setUserName] = useState('');
    // const [birthday, setBirthday] = useState('');
    // const [email, setEmail] = useState('');

    // const handleClick = (userName, birthday, email) => {
    //     console.log(userName);
    //     history.push('/booklist')
    // }

    return (
        <div style={{ backgroundColor: 'white' }}>
            <h3>Preencha o formulário abaixo para concluir sua compra:</h3>
            <div style={{padding:10}}>
            <label>
                Nome Completo:
        <input type="text" placeholder="Nome Completo" value={userName} onChange={setUsername} />
            </label>
            </div>
            <br />
            <div style={{padding:10}}>
            <label >
                Data de Nascimento:
        <input type="date" placeholder="Data de Nascimento" value={birthday} onChange={setBirthday} />
            </label>
            </div>
            <br />
            <div style={{padding:10}}>
            <label >
                Email:
        <input type="text" placeholder="Email" value={email} onChange={setEmail} />
            </label>
            </div>
            <br />
            <button style={{ padding: 10 }} onClick={handleClick}>Finalizar</button>
        </div>
    );
}

export default CheckoutForm;
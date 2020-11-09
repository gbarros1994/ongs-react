import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import '../Logon/style.css';

import logoimg from '../../assets/logo.svg';
import herosimg from '../../assets/heroes.png';

export default function Logon(params) {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            console.log(response.data.name)
        } catch (error) {
            alert('falha no login');
        }
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} />
                    <button className="button"  type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02141" />
                        Não tenho cadastro</Link>
                </form>
            </section>

            <img src={herosimg} alt="Heroes" />
        </div>
    );
}
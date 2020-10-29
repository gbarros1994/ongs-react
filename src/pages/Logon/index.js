import React from 'react';

import '../Logon/style.css';

import logoimg from '../../assets/logo.svg';
import herosimg from '../../assets/heroes.png';

export default function Logon(params) {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be the Hero" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Sua ID" />
                    <button  type="submit">Entrar</button>

                    <a href="/register">Não tenho cadastro</a>
                </form>
            </section>

            <img src={herosimg} alt="Heroes" />
        </div>
    );
}
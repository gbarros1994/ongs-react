import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

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
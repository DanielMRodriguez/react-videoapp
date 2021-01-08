import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions/index';
import "../assets/styles/components/Register.scss";

const Register = (props) => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: ''
    });

    const handleInput = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        onChange={handleInput}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Correo"
                        onChange={handleInput}
                        name="email"
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                        name="password"
                    />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="login">
                    Iniciar sesión
            </Link>

            </section>
        </section>
    );
}
const mapDispatchToProps = {
    registerRequest
}
export default connect(null, mapDispatchToProps)(Register);
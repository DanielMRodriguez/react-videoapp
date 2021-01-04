import React from "react";
import "../assets/styles/Categorias.scss";

const Categoria = ({ children, title }) => (
    <div className="categoria">
        <h3 className="categories__title">{title}</h3>
        {children}
    </div>
);

export default Categoria;
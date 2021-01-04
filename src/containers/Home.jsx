import React, { useState, useEffect } from 'react';
import Search from "../components/Search.jsx";
import Categoria from "../components/Categoria.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {

    const initialState = useInitialState(API);

    return (
        <React.Fragment>
            <Search />
            {
                initialState.mylist.length > 0 &&
                (<Categoria title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categoria>)
            }

            <Categoria title="Trends">
                <Carousel>
                    {
                        initialState.trends.map(e => <CarouselItem key={e.id} {...e} />)
                    }
                </Carousel>
            </Categoria>

            <Categoria title="Originales de platzi video">
                <Carousel>
                    {
                        initialState.trends.map(e => <CarouselItem key={e.id} {...e} />)
                    }
                </Carousel>
            </Categoria>

        </React.Fragment>
    );
}

export default Home
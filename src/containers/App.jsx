import React from 'react';
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categoria from "../components/Categoria.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/styles/App.scss";

const App = () => (
    <div className="app">
        <Header />
        <Search />
        <Categoria title="Mi lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categoria>

        <Categoria title="Trends">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categoria>

        <Categoria title="Originales de platzi video">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categoria>
        <Footer />
    </div>
)

export default App
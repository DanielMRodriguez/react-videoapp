import React from 'react';
import { connect } from 'react-redux';
import Search from "../components/Search.jsx";
import Categoria from "../components/Categoria.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals }) => {
    return (
        <React.Fragment>
            <Search />
            {
                myList.length > 0 &&
                (<Categoria title="Mi lista">
                    <Carousel>
                        {myList.map(e =>
                            <CarouselItem
                                key={e.id}
                                {...e}
                                isList
                            />)}
                    </Carousel>
                </Categoria>)
            }

            <Categoria title="Trends">
                <Carousel>
                    {
                        trends.map(e => <CarouselItem key={e.id} {...e} />)
                    }
                </Carousel>
            </Categoria>

            <Categoria title="Originales de platzi video">
                <Carousel>
                    {
                        originals.map(e => <CarouselItem key={e.id} {...e} />)
                    }
                </Carousel>
            </Categoria>

        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home);
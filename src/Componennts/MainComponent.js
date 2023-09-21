import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Categories from './Category';

const MainComponent = () => {

    return (
        <React.Fragment>
            <Header />
            <Categories />
            <Footer />
        </React.Fragment>
    )
}

export default MainComponent
import React, { Component }     from 'react';
import Nav                      from './Components/Nav/Nav';
import Sort                     from './Components/Main/Sort/Sort';
import Footer                   from './Components/Footer/Footer';
import Overlay                  from './Components/Overlay/Overlay';
import data                     from './data';

class App extends Component {
    render() {
        return (
            <div className='App PoolPros'>
                <Overlay />
                <header className='Header'>
                    <Nav />
                </header>
                <main className='Main'>
                    <div className='Main__Img'>Pool Pros</div>
                    <Sort data={data} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
import { Filter } from './components/Filter/Filter';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import './App.css';

export const App = () => {

    return (
        <div className="App">
            <Filter />
            <Main />
            <Footer />
        </div>
    );
};

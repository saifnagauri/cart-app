import { BrowserRouter } from 'react-router-dom';
import MainPage from './Containers/MainPage/MainPage';
import './App.scss';

function App() {
    return (
         <BrowserRouter>
            <div className="container p-3">
                <MainPage></MainPage>
            </div>
        </BrowserRouter>
    );
}

export default App;

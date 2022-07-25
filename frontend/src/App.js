import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDiaries from './components/AllDiaries/AllDiaries';
import HomePage from './components/HomePage/HomePage';

const App = () => {
    return (
        <div id="App">
<BrowserRouter>
            <Routes>
                <Route exact path="/diaries" element={<AllDiaries/>}/>
                <Route exact path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
        </div>
        
    );
}

export default App;
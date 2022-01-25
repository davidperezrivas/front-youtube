import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/404/404.components';
import VideosComponent from './components/Videos/Videos.component';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VideosComponent />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    );
}

export default App;

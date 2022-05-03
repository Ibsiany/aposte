import {BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
 
export const Routes: React.FC = () => {
return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Login />} />
            </Router>
        </BrowserRouter>
    );
};
  
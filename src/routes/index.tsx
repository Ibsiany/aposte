import {BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Login } from '../components/Login';
 
export const Routes: React.FC = () => {
return (
        <BrowserRouter>
            <Router>
                <Route path="/">
                    <Login />
                </Route>
            </Router>
        </BrowserRouter>
    );
};
  
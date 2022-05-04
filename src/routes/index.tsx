import {BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { CreateUser } from '../pages/CreateUser';
import { Login } from '../pages/Login';
 
export const Routes: React.FC = () => {
return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Login />} />
                <Route path="/create" element={<CreateUser />} />
            </Router>
        </BrowserRouter>
    );
};
  
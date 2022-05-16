import {BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { CreateUser } from '../pages/CreateUser';
import { Login } from '../pages/Login';
import { MyBets } from '../pages/MyBets';
 
export const Routes: React.FC = () => {
return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Login />} />
                <Route path="/create" element={<CreateUser />} />
                <Route path="/dashboard" element={<MyBets />} />
            </Router>
        </BrowserRouter>
    );
};
  
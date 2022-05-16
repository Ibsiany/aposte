import {BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { CreateUser } from '../pages/CreateUser';
import { Login } from '../pages/Login';
import { MyBets } from '../pages/MyBets';
import { PrivateRoute } from './Route';
 
export const Routes: React.FC = () => {
return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Login />} />
                <Route path="/create" element={<CreateUser />} />
                <Route path="/auth" element={<PrivateRoute />}>
                    <Route path="/auth/dashboard" element={<MyBets />} />
                </Route>
            </Router>
        </BrowserRouter>
    );
};
  
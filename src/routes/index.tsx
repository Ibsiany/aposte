import {BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { CreateUser } from '../pages/CreateUser';
import { EditUser } from '../pages/EditUser';
import { Login } from '../pages/Login';
import { MyBets } from '../pages/MyBets';
import { PrivateRoute } from './Route';
 
export const Routes: React.FC = () => {
    // const history = createBrowserHistory()

    // if(history.location.pathname.includes('dashboard')){
    //     const element = document.getElementById('dashboard');

    //     console.log(element)

    //     element?.setAttribute('color', '#B22222')
    // } else if (history.location.pathname.includes('play')){
    //     const element = document.getElementById('play');

    //     element?.setAttribute('color', '#B22222')
    // } else if (history.location.pathname.includes('score')){
    //     const element = document.getElementById('score');

    //     element?.setAttribute('color', '#B22222')
    // } else if (history.location.pathname.includes('result')){
    //     const element = document.getElementById('score');

    //     element?.setAttribute('color', '#B22222')
    // }

return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Login />} />
                <Route path="/create" element={<CreateUser />} />
                <Route path="/auth" element={<PrivateRoute />}>
                    <Route path="/auth/dashboard" element={<MyBets />} />
                    <Route path="/auth/edit-user" element={<EditUser />} />
                </Route>
            </Router>
        </BrowserRouter>
    );
};
  
import {BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { BetsInTheGame } from '../pages/BetsInTheGame';
import { BetsInTheScore } from '../pages/BetsInTheScore';
import { ConfigurationTheGame } from '../pages/ConfigurationTheGame';
import { CreateUser } from '../pages/CreateUser';
import { EditUser } from '../pages/EditUser';
import { Login } from '../pages/Login';
import { MyBets } from '../pages/MyBets';
import { Result } from '../pages/Result';
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
                    <Route path="/auth/bets-play" element={<BetsInTheGame />} />
                    <Route path="/auth/bets-score" element={<BetsInTheScore />} />
                    <Route path="/auth/result" element={<Result />} />
                    <Route path="/auth/setting" element={<ConfigurationTheGame />} />
                </Route>
            </Router>
        </BrowserRouter>
    );
};
  
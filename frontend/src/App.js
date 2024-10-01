import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing/landing'
import Learn from './learning pages/learn'
import Money from './learning pages/money/money'
import Credit from './learning pages/credit score/credit'
import BudgetSignIn from './budget front/signin/signin';
import './App.css';

function App() {
  return (
    <div className='content'>
      <div className='header'>
          <img className= 'logo' src= 'https://lh3.googleusercontent.com/pw/ABLVV85a0LQtd6PZFs32ILCgMpx-aEsZnPJ4xbZ_xvjY_JaM_4VwXkmbx6Hml5gp0Cj4pt1gSxsdbPLUEsr0PapPO7H5xPRsNObchwSqREaPuxMJNR2_2vg2sA-3lnjtEbNW4gjQ773thWNLw4Ovf31ceoR1JKqY4rbumnd1-SOrDt7ZwGbp28UqjoKhGEp8Abu81JIs3_pypytL4gZ5DIz5rbovLIHkoJzSNd-JsZy2zPQD0QaIMSMvrdNFGNDSxOmOEtrpQeZ134d9nUvsYAMwxLEFw8TaMy6A6DO0mMvo2GoULWUP-S-kADnxwOVoRZybA_J4ZvfM4X71wRd14YF8Ifp1Kn3uMzpu_7xI5BQlWPhBHbD_FuDHwQa0lOK2TPTKgG3S9p95OuXGQB5z1rkUCW9GSVoh4xrld22ksMS_eTLi9rqtQgvL8UG4b6QPskH0E_-OkPL-tUX-dn3dsfNSa7QY5nS_6bDVGpaZxR599TgKAhHzPwyeVGJJEh7PXvLKH2JuQFwO9jglWju-CaQWHJnZ7h8B0NbZB72Bqh7y0RrsN8aoHOCymQVCAMnIYhE-kGBBaR3cbOifQrMS2ukb2ZYK0sQ_rUydpy7tHr7ZNSv8A60oMIPLAUPk67ZUOeDgDLNSJOksY6yFtYa7ts4cx0QkPZ8qY4px_YaVQ3nJbFulpe_2hyjUFU_Ld0YP2Nrzo7gjCr1DmvZb8CcgFujkcKRZCHZ_xvMQjhkp7AVFQFjB5Sz0wo02ThVJfonDvxwt9E2KDlWACuE8FYAHc6tj4zEwu_rffkOUn5hzk6Hkx44tyuiHZkDHmg9Jo7l5zD79l7yRqAk3o-ADzJTlgMgOvO8wmAiiB1BttHWBGsvQ4fxCkckLcxQ9Tl0XNBgVqFq3pMnEURXYV5goQo6ChZtCbPPVCKPFdGr3TZlcvuZCYOyNwuc4ZObyJYZnlGie67Fz1sopuZolRNxGIU8wP9iWpL4XxUu14Xo=w500-h500-s-no-gm?authuser=0' alt='piggybanklogo'/>
            <text className='headername'>PiggyBank</text>
        <div className='line-container'>
          <div className='line'></div>
      {/* the router loads everything */}
      <div className="App">
        <Router> 
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/money" element={<Money />} />
              <Route path="/credit" element={<Credit />} />
              <Route path="/budget" element={<BudgetSignIn />} />

              {/* <Route path="/budget" element={<Budget />} /> */}

            </Routes>
        </Router>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
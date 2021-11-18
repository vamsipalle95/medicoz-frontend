import React, { Component } from 'react';
import DrLogin from '../DrLogin/DrLogin';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


export default function SignUp() {
    
        return (
            <div>
                <Router>
                    <Route exact path="/DrLogin">
                        <DrLogin/>
                    </Route>
                </Router>
                    
            </div>
        );
    }

import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import {createGenerateClassName, StylesProvider} from '@material-ui/core'

import Pricing from './components/Pricing'
import Landing from './components/Landing'

// Aggiunge un prefisso alle classi CSS-in-JS in prod (avoid classNames collision)
const generateClassName = createGenerateClassName({
    productionPrefix: 'marketing'
})

export default ({history}) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}/>
                        <Route exact path="/" component={Landing}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
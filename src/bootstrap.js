import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

console.log('Marketing works!')

// Mount func to start up the application
const mount = el => {
    ReactDOM.render(<App/>, el)
}

export {mount}

// If we are in dev and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    // root element to attach application
    const devRoot = document.querySelector('#_marketing-dev-root')

    // If present calls mount fuctions
    devRoot && mount(devRoot)
}
import React from 'react'
import ReactDOM from 'react-dom'
import './frontend/components/index.css'
import App from './frontend/components/App'
import * as serviceWorker from './frontend/serviceWorker'
import AuthContextProvider from './frontend/context/AuthContext'
import UIContextProdiver from './frontend/context/UIContext'

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <UIContextProdiver>
                <App />
            </UIContextProdiver>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

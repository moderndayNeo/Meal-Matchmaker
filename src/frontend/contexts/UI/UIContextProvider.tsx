import React from 'react'
import UIContext from './UIContext'

const UI: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const uiContext = {
        signInModal: true,
    }

    return <UIContext.Provider value={uiContext}>{children}</UIContext.Provider>
}

export default UI

import React from 'react'
import UIContext from './UIContext'

const UI: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [signInModal, setSignInModal] = React.useState<boolean>(false)

    const uiContext = {
        signInModal,
        setSignInModal,
    }

    return <UIContext.Provider value={uiContext}>{children}</UIContext.Provider>
}

export default UI

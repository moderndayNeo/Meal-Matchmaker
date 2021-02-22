import React, { createContext } from 'react'

interface UIContextInterface {
    signInModal: boolean
}

const defaultUIContext: UIContextInterface = {
    signInModal: false,
}

const UIContext = React.createContext<UIContextInterface>(defaultUIContext)

export const UI: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const uiContext = {
        signInModal: false,
    }

    return <UIContext.Provider value={uiContext}>{children}</UIContext.Provider>
}

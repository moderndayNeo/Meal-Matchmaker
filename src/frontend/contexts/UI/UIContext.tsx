import React from 'react'

interface UIContextInterface {
    signInModal: boolean
}

const defaultUIContext: UIContextInterface = {
    signInModal: true,
}

const UIContext = React.createContext<UIContextInterface>(defaultUIContext)

export default UIContext

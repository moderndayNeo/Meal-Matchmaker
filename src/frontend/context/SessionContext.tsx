// import React, { createContext, useContext, useState } from 'react'

// // // @ts-ignore
// // export const SessionContext = createContext()
// export const SessionContext = createContext<any>({})

// // const SessionContextProvider = ({ children: React.ReactNode }) => {
// export const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const sessionContext = {}

//     return (
//         <SessionContext.Provider value={sessionContext}>
//             {children}
//         </SessionContext.Provider>
//     )
// }

export default null


// imports
// declare constants
// delcare and extend interfaces

// const Auth = ( {children} ) => {

//     define reducer
//     define useEffect to run on every render

//     define authContext = {
//         signIn: (email, password) => {
//             POST details to BE, get JWT
//             dispatch new details to reducer
//         },
//         signOut: () => {
//             remove JWT from browser localStorage
//             dispatch SIGN OUT action
//         },
//         user: state.user
//     }

//     return (
//         <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
//       )
// }



// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }
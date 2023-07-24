import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalstorage';

export const GlobalContext = createContext({
    userSession : {},
    setUserSession: ({token, isLogin, username}) => {}
});


export default function GlobalProvider( { children }) {
    const [userSessionAux, setUserSessionAux] = useState({token: '', isLogin: false, username: ''})
   
    const [userSession, setUserSession] = useLocalStorage('userSession', userSessionAux);


  return (
    <GlobalContext.Provider value={{userSession, setUserSession}}>
        {children}
    </GlobalContext.Provider>
  )
}
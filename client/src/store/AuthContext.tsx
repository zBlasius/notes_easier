
import { createContext, useState } from "react";
import { GlobalContent, ChildrenProps } from "../interfaces/interface";

export const EmailContext = createContext<GlobalContent>({
    email: 'Hello World',
    setEmail: (e) => {}
});

export const EmailProvider = ({children}: ChildrenProps) =>{
    const [email, setEmail] = useState("");

    return(
        <EmailContext.Provider value={{email, setEmail}}>
            {children}
        </EmailContext.Provider>
    )
}
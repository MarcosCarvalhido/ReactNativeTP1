import React, { createContext, useState } from "react";

export const APIContext:any = createContext("No data")

export function APIProvider({children}:any){
    const [acoes, setAcoes] = useState("No data")
    async function chamarAPI() :Promise<void> {
        const key = "4f489eb2f31d979d122952933afb26ad"
        const url = `https://api.marketstack.com/v1/eod?access_key=${key}&symbols=AAPL`
        const options = {
            method: "GET",
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setAcoes(result)
            console.log(result);
            console.log("result");
        } catch (error) {
            console.error(error);
        }
    }
    function banana(){
        console.log("BANANA")
    }
    return (
        <APIContext.Provider value={{acoes,chamarAPI,banana}}>
            {children}
        </APIContext.Provider>
    )
}
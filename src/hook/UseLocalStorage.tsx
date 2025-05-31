import { error } from "console";
import { useEffect,  useState } from "react"

const UseLocalStorage = (key,initValue) => {
    const [value,setValue]= useState(()=>{
        try{

            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        }
        catch (e){
            console.error(e);
            return initValue;
        }
    });
    useEffect(()=>{
try{
    localStorage.setItem(key,JSON.stringify(value));
}
catch (e){
    console.error(e);
}
    },[key,value]);
  return [value,setValue];
}

export default UseLocalStorage
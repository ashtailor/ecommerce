import { data } from "react-router-dom";
import { toast } from "react-toastify";

    export async function login(authDetail,navigate)
    {
        const requestOption = 
        {
            method: "POST",
            headers: { "Content-type": 
                      "application/json"
                    },
            body: JSON.stringify(authDetail)
        };
    
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOption);
      const data = await response.json();
      console.log("Login Response: "+ JSON.stringify(data));
      
      if(data.token)
      {
        sessionStorage.setItem("token" , JSON.stringify(data.token));
        sessionStorage.setItem("cbid",JSON.stringify(data.user.username));
        navigate("/products")
      }
      else{
            toast.error(data.message || "login failed");
      }
        return data;
    }
        
    export async function register(authDetail, navigate) 
    {
        const requestOption =
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(authDetail)
        };
            const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOption);
            const data = await response.json();
            console.log(data);
            data.accessToken ? navigate("/products"): toast.error(data.message);
            return data;
    }
    
    export function logout()
    {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("cbid");
    }
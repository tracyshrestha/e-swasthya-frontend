import React, {useState} from 'react';
import cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';


export const AuthContext = React.createContext({
     isLoggedIn : false,

     onLogout : () => {},
     onLogin : () => {},
     isAuth : () => {},

})

export const AuthContextProvider = (props) => {
     const [isLoggedIn,setIsLoggedIn] = useState(false);

    //set Cookie
    const setCookieHandler = (key,value) => {
        if( window!== 'undefined') {
              cookie.set(key,value,{
                  expires : 1
              })
        }
    }
    //remove cookie 
    const removeCookieHandler = (key) => {
        if(window != 'undefined'){
            cookie.remove(key , {
                  expires : 1
            })
        }
    }

    //get stored Cookie
    const getStoredCookie = (key,value) => {
         if(window !== 'undefined'){
             return cookie.get(key);
         }
    }
    
    //setLocalstorage
    const setLocalstorage = (key,value) => {
        if(window !== 'undefined'){
            localStorage.setItem(key,JSON.stringify(value))
        }
    }

    //remove localstorage
     const removeLocalstorage = (key) => {
        if(window !== 'undefined'){
            localStorage.removeItem(key)
        }
    }
    
     //Login handler 
     const LoginHandler = (response) => {
           setIsLoggedIn(true);
           setCookieHandler('token',response?.data?.jwt);
           let {userId,authority,email,isFormFilled,isVerified} = jwtDecode(response?.data?.jwt);
           console.log(authority);
           authority = authority[0]["authority"];
           setLocalstorage('user',{userId,authority,email,isFormFilled,isVerified})
     }
    
    //isAuth
    const isAuth = () => {
        
          
        if(window !== 'undefined'){
            const cookieChecked = getStoredCookie('token');
            if(cookieChecked){
                 if(localStorage.getItem('user')){
                     return JSON.parse(localStorage.getItem('user'))
                 }
            }else{
                return false;
            }
        }
    }

     //logout handler
     const LogoutHandler = () => {
           removeCookieHandler('token');
           removeLocalstorage('user');
           setIsLoggedIn(false);
     }

     return (
         <AuthContext.Provider 
            value = {{
                 onLogin : LoginHandler,
                 onLogout : LogoutHandler,
                 isAuth : isAuth,
                 getStoredCookie : getStoredCookie

            }}
     >
       {props.children}
     </AuthContext.Provider>
    )
}
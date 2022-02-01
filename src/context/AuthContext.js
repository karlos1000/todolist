import { createContext, useState } from "react";

const AuthContext = createContext();
const InitialAuth = null;

const AuthProvider = ({children}) => {
	const [auth, setAuth] = useState(InitialAuth);

	const handleAuth = (e) => {
	  if(auth){
	  	console.log("0");
	  	setAuth(null);
	  }else{
	  	console.log("1");
	  	setAuth(true);
	  }
	}

	const data = {auth, handleAuth};

	return (
	   <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
	)
}

export { AuthProvider };
export default AuthContext;
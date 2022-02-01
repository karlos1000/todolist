import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Login from '../components/Login';

const Home = () => {
  const {auth, handleAuth} = useContext(AuthContext);

  return (
  	<>
  	{auth?
  		(
  			<div>
		    	<div>Logueado</div>
		    	<button onClick={ ()=> handleAuth(null) } >Cerrar sesi&oacute;n</button>
		    </div>
  		)
  		: (
	  		<div>
		    	{/* <div>Publico</div>
		    	<button onClick={ ()=> handleAuth(true) } >Acceder</button> */}
		    	<Login
						handleAuth={handleAuth}
					/>
		    </div>
		)
	}
  	</>
  )
}

export default Home;
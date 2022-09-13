import { useNavigate } from "react-router-dom";


function App() {
  const navigate=useNavigate()

  const navigateToUseState=()=>{
    navigate('/useState')
  }
  const navigateToUseEffect=()=>{
    navigate('/useEffect')
  }

  const navigateToUseEffectTimer=()=>{
    navigate('/useEffect/timer')
  }
  const navigateToUseEffectApi=()=>{
    navigate('/useEffect/api')
  }
  const navigateToUseContext=()=>{
    navigate('/useContext')
  }
  const navigateToUseReducer=()=>{
    navigate('/useReducer')
  }
  const navigateToUseReducer2=()=>{
    navigate('/useReducer2')
  }
  const navigateToUseReducerApi=()=>{
    navigate('/useReducerApi')
  }
  const navigateToUseCallback=()=>{
    navigate('/useCallback')
  }
  const navigateToUseMemo=()=>{
    navigate('/useMemo')
  }
  const navigateToUseRefFocus=()=>{
    navigate('/useRefFocus')
  }
  const navigateToUseRefTimer=()=>{
    navigate('/useRefTimer')
  }
  const navigateToSecureHomePage=()=>{
    navigate("secureHomePage");
  }
  return (
   <div>
    <h2>React Practices</h2>
    <h3>useState</h3>
    <button onClick={navigateToUseState}>useState</button>
    <hr></hr>
    <h3>useEffect</h3>
    <button onClick={navigateToUseEffect}>useEffectCounter</button>
    <button onClick={navigateToUseEffectTimer}>Timer</button>
    <button onClick={navigateToUseEffectApi}>ApiCall</button>

    <hr></hr>
    <h3>UseContext</h3>
    <button onClick={navigateToUseContext}>UseContext</button>
    
    <hr></hr>
    <h3>useReducer</h3>
    <button onClick={navigateToUseReducer}>UseReducer</button>
    <button onClick={navigateToUseReducer2}>UseReducer2</button>
    <button onClick={navigateToUseReducerApi}>UseReducerApi</button>

    <hr></hr>
    <h3>useCallback</h3>
    <button onClick={navigateToUseCallback}>UseCallback</button>
   
    <hr></hr>
    <h3>useMemo</h3>
    <button onClick={navigateToUseMemo}>UseMemo</button>
   
    <hr></hr>
    <h3>UseRefFocus</h3>
    <button onClick={navigateToUseRefFocus}>UseRef Focus</button>
    <button onClick={navigateToUseRefTimer}>UseMemo Timer</button>

    <hr></hr>
    <h3>Secure/Protected Route</h3>
    <button onClick={navigateToSecureHomePage}>Secure Home Page</button>


    
   </div>


  );
}

export default App;

import Clockdate from "./Components/Clockdate";
import ClockName from "./Components/ClockName";
import Clockpara from "./Components/Clockpara";


function App(){
  return <>
  <div className="container">
  <ClockName />
  <Clockpara />
  <Clockdate/>
  </div>
  </>
}

export default App;
import PlayerList from "./components/PlayerList";
import PlayerContextProvider from "./contexts/PlayerContextProvider";



function App() {
  
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <PlayerContextProvider>
            <PlayerList /> 
          </PlayerContextProvider>
        </div>
      </div>
    </div>
   
  )
}

export default App;

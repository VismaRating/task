import data from "./database/payload.json"
function App() {

 const Data = []
 Data.push(data)
 

Data.map((i)=>(
  console.log(i.hits.hits)
))

  return (
    <div className="App">
    
    
    </div>
  );
}

export default App;

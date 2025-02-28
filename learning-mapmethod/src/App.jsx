
function App() {
  // const Heroes = ['IRONMAN', 'THOR', 'CAPTAIN AMERICA', 'HULK', 'VISION', 'BLACK PANTHER']
  const Heroes = []
  // const emptyMessage = Heroes.length === 0 ? <h3>Still thinging</h3> : null;
  return <>
  <h1>Super Heroes List</h1>
  {Heroes.length === 0 && <h3>Still thinking</h3>}
  <ul className="list-group">
  {Heroes.map((hero, index)=>(<li key={index} className="list-group-item">{hero}</li>))}
  </ul>
  
  </>
  
}

export default App

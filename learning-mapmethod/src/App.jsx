
function App() {
  // const stdLst = ["Soumya", "Vedant", "Ashwin", "Lanchana", "Jayesh","Jai", "Neelesh","Neil",]
  const stdLst = []

  if (stdLst == 0){
    return <h3>List is empty</h3>
  }

  return <>
  <h1>Student List</h1>
  <ul className="list-group">
    {stdLst.map((std,index) => (<li key={index} className="list-group-item">{std}</li>))}
  </ul>
  </>
}

export default App

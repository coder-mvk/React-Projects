function AddToDo(){
    return <>
    <div class="container">
    <div class="row ttu-row">
    <div class="col-6">
      <input type="text" placeholder="Enter TODO here"/>
    </div>
    <div class="col-4">
      <input type="date" />
    </div>
    <div class="col-2">
      <button class='btn btn-success ttu-btn'>Add</button>
    </div>
  </div>
  </div>
    </>
}

export default AddToDo;
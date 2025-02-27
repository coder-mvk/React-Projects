function ToDoItem1(){
    let todoName = 'Butter Milk';
    let todoDate = '27/02/25';


    return <>
    <div class="container">
    <div class="row ttu-row">
    <div class="col-6">
    {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
    <div class="col-2">
      <button class='btn btn-danger ttu-btn'>Delete</button>
    </div>
  </div>
  </div>
    </>
}

export default ToDoItem1;
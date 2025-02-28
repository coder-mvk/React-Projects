function Clockdate(){
    let dateTime = new Date();

    return <>
    <p className="text-center fw-medium">This is the current time : {dateTime.toLocaleDateString()} and {dateTime.toLocaleTimeString()}</p>
    </>
}


export default Clockdate;
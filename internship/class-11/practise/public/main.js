const getAllToDo = async()=>{
    const response = await axios.get("http://localhost:4000//all-todos")
    console.log(response.data);
}
getAllToDo();
import axios from "axios"
export const consultarTodosFachada = async ()=>{
    return consultarTodos()
}

const consultarTodos = ()=>{
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/vehiculos`).then(r=> r.data)
    return data
}

export const consultarTodosFachadaCedula = async (cedula)=>{
    return consultarTodosCedula(cedula)
}
const consultarTodosCedula = async (cedula)=>{
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/vehiculos/${cedula}`).then(r=> r.data)
    return data
}
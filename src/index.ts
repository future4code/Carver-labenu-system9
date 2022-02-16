import { app } from "./app";

import { getProfessors } from "./endpoints/professors/getProfessors";
import { getStudentByName } from "./endpoints/students/getStudentByName";
import registerProfessors from "./endpoints/professors/registerProfessor";
import registerStudent from "./endpoints/students/registerStudent";
import changeClassProfessor from "./endpoints/professors/changeClassProfessor";
import changeClassStudent from "./endpoints/students/changeClassStudent";




app.get("/users", getStudentByName)
app.get("/professors", getProfessors)


app.put('/professors', registerProfessors)
app.put('/users', registerStudent)


app.post('/professors', changeClassProfessor) //falta função para editar o Banco de Dados
app.post('/users', changeClassStudent) 
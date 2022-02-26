import { app } from "./app";

import { getProfessors } from "./endpoints/professors/getProfessors";
import { getStudentByName } from "./endpoints/students/getStudentByName";
import registerProfessors from "./endpoints/professors/registerProfessor";
import registerStudent from "./endpoints/students/registerStudent";
import changeClassProfessor from "./endpoints/professors/changeClassProfessor";
import changeClassStudent from "./endpoints/students/changeClassStudent";
import registerClass from "./endpoints/class/registerClass";
import changeModuleClass from "./endpoints/class/changeModuleClass";
import { getActiveClasses } from "./endpoints/class/getActiveClasses";
import { getStudentByHobby } from "./endpoints/students/getStudentsByHobby";




app.get("/students", getStudentByName)
app.get('/students/hobbies', getStudentByHobby) //pegar estudantes pelo hobbby
app.get("/professors", getProfessors)
app.get('/class', getActiveClasses)

app.post('/students/:student_id', changeClassStudent) 
app.post('/professors/:professor_id', changeClassProfessor) 
app.post('/class', changeModuleClass) 

app.put('/students', registerStudent)
app.put('/professors', registerProfessors)
app.put('/class', registerClass)


/*
Boas práticas
headers -> tokens
path params -> id's
query params -> filtros
body -> informações a serem adicionadas no banco
*/

/*
Students
id                name        email              birth_date    class_id
1645119777858	Joãozinho	joaozinho@mail.com	29/08/1996	1645102622910
1645119833254	Pedrinho	pedrinho@mail.com	29/08/1996	1645102622910
1645119883243	Mariazinha	maria@mail.com	29/08/1996	1645118961850
*/

/*
Class
id              name      module
1645102622910	Turma 1A	0
1645103184091	1B      	5
1645118661897	1A      	0
1645118716713	3A      	0
1645118901147	3A      	0
1645118961850	3C      	0
*/

/*
Professors
1645106545104	Geraldo	geraldin@mail.com	30/09/1994	1645103184091
1645118451717	Zeca Pagodinho	abobrinha@mail.com	30/09/1985	1645103184091
*/

/*
Hobbies
id   name
001	Praticar esportes
002	lêr
003	Games
004	Artesanato
005	Trilha
006	Cozinhar
*/

/*
Student_hobby
id   student_id     hobby_id
SH1	1645119777858	001
SH2	1645119777858	002
SH3	1645119833254	003
SH4	1645119833254	004
SH5	1645119883243	005
*/

/*
Specialties
002	CSS
001	JS
005	POO
003	React
004	Typescript
*/

/*
Professor_specialty
id   professor_id   specialty_id
PS1	1645106545104	001
PS2	1645106545104	002
PS3	1645106545104	003
PS4	1645118451717	004
PS5	1645118451717	005
*/


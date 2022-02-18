import express, {Request, Response} from 'express'
import connection from "../../connection";

export const registerStudent = async(req: Request, res:Response) : Promise <void> => {
    try {
        const {name, email, birth_date, class_id} = req.body

        const classroom = await connection("Class")

        const classroomId = classroom.map((idClass) => {
            return idClass.id
        })

        const verification = classroom.filter((idClass) => {
            return idClass.id === class_id
        })

        if (verification.length === 0) {
            res.status(404)
            throw new Error("Classe informada não encontrada")
        }

        if(!name || !email || !birth_date || !class_id){
            res.status(404)
            throw new Error ("Um ou mais valores não foram enviados")
        }

        const student : any = {
            id: Date.now().toString(),
            name,
            email,
            birth_date,
            class_id
        }

        await connection ("Students").insert(student)
        res.status(200).send({message: 'Aluno cadastrado com sucesso!'})

    } catch (error:any) {
        res.send({ message: error.message || error.sqlMessage || "Algo deu errado "})
    }
}
export default registerStudent
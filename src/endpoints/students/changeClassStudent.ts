import express, {Request, Response} from 'express'
import connection from "../../connection";

export const changeClassStudent = async(req: Request, res:Response) : Promise <void> => {
    try {
        const class_id = req.body.class_id
        const student_id = req.params.student_id
        if(!class_id || !student_id ){
            res.status(404)
            throw new Error ("Um ou mais valores não foram enviados")
        }

        await connection.raw(`
          UPDATE Students
          SET class_id = ${class_id}
          WHERE id = ${student_id};
      `)
        
        res.status(200).send({message: 'Classe do aluno alterada!'})

    } catch (error:any) {
        res.send({ message: error.message || error.sqlMessage || "Algo deu errado "})
    }
}
export default changeClassStudent
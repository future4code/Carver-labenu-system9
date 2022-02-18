import express, { Request, Response } from 'express'
import connection from "../../connection";

export const changeClassProfessor = async (req: Request, res: Response): Promise<void> => {
    try {
        const class_id = req.body.class_id as string
        const professor_id = req.params.professor_id as string

        if (!class_id || !professor_id) {
            res.status(404)
            throw new Error("Um ou mais valores não foram enviados")
        }

        if (class_id.length === 0 || professor_id.length === 0) {
            res.status(404)
            throw new Error("Um ou mais valores enviados nulos")
        }

        await connection.raw(`
          UPDATE Professors
          SET class_id = ${class_id}
          WHERE id = ${professor_id};
      `)

        res.status(200).send({ message: 'Classe do professor alterada!' })

    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage || "Algo deu errado "})
    }
}
export default changeClassProfessor
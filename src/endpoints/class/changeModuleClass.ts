import express, { Request, Response } from 'express'
import connection from "../../connection";

export const changeModuleClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const module = req.body.module 
        const class_id = req.query.class_id

        if (!class_id || !module) {
            res.status(404)
            throw new Error("Um ou mais valores não foram enviados")
        }

        if (module.length === 0 || class_id.length === 0) {
            res.status(404)
            throw new Error("Um ou mais valores enviados nulos")
        }

        if (module < 0 || module > 6) {
            res.status(401)
            throw new Error("Modulo deve ser entre 0 e 6")
        }

        await connection.raw(`
          UPDATE Class
          SET module = ${module}
          WHERE id = ${class_id};
      `)

        res.status(205).send({ message: 'Módulo da turma alterado!' })

    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage || "Algo deu errado "})
    }
}
export default changeModuleClass

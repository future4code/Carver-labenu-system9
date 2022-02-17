import express, { Request, Response } from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";


const registerProfessors = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, birth_date, class_id } = req.body

        const classroom = await connection("Class")

        const classroomId = classroom.map((x) => {
            return x.id
        })

        const verification = classroom.filter((x) => {
            return x.id === class_id
        })
        
        if (verification.length === 0) {
            throw new Error("Classe informada não existe")
        }

        if (!name || !email || !birth_date || !class_id) {
            throw new Error("Um ou mais campos não foram preenchidos")
        }

        const professor: any = {
            id: Date.now().toString(),
            name,
            email,
            birth_date,
            class_id
        }


        await connection("Professors").insert(professor)
        res.status(200).send({ message: 'Professor cadastrado com sucesso!' })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export default registerProfessors
import express, {Request, Response} from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";

const registerClass = async(req: Request, res:Response) : Promise <void> => {
    try {
        const {name, module} = req.body

        if(!name){
            res.status(404)
            throw new Error ("Valor name não informado")
        }

        if (module < 0 || module > 6) {
            res.status(401)
            throw new Error("Modulo deve ser entre 0 e 6")
        }

        const classroom = await connection("Class")

        const classroomId = classroom.map((x) => {
            return x.name
        })

        const verification = classroom.filter((x) => {
            return x.name === name
        })
        
        if (verification.length === 1) {
            res.status(401)
            throw new Error("Classe informada já existe")
        }

        const classRoom : any = {
            id: Date.now().toString(),
            name,
            module
        }

        await connection ("Class").insert(classRoom)

        res.status(200).send({message: 'Classe cadastrada com sucesso!'})

    } catch (error:any) {
        res.send({ message: error.message || error.sqlMessage || "Algo deu errado "})
    }
}
export default registerClass
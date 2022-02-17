import express, {Request, Response} from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";


const registerClass = async(req: Request, res:Response) : Promise <void> => {
    try {
        const {name, module} = req.body

        if(!name){
            throw new Error ("Valor name não informado")
        }

        const classRoom : any = {
            id: Date.now().toString(),
            name,
            module
        }

        await connection ("Class").insert(classRoom)

        res.status(200).send({message: 'Classe cadastrada com sucesso!'})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default registerClass
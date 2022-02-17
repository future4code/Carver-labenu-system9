import express, {Request, Response} from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";


const registerClass = async(req: Request, res:Response) : Promise <void> => {
    try {
        const name = req.body.name
        if(!name){
            throw new Error ("Um ou mais campos não foram preenchidos")
        }

        const classRoom : any = {
            id: Date.now().toString(),
            name,
        }

        await connection ("Class").insert(classRoom)

        res.status(200).send({message: 'Classe cadastrada com sucesso!'})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default registerClass
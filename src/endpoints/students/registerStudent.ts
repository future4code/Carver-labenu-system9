import express, {Request, Response} from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";


export const registerStudent = async(req: Request, res:Response) : Promise <void> => {
    try {
        const {name, email, birth_date, class_id} = req.body
        if(!name || !email || !birth_date || !class_id){
            throw new Error ("Um ou mais campos não foram preenchidos")
        }

        const student : any = {
            id: Date.now().toString(),
            name,
            email,
            birth_date,
            class_id
        }

        await connection ("Students").insert(student)
        res.status(200).send({message: 'Professor cadastrado com sucesso!'})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default registerStudent
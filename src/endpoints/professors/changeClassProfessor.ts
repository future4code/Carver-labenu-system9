import express, {Request, Response} from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";


export const changeClassProfessor = async(req: Request, res:Response) : Promise <void> => {
    try {
        const class_id = req.body.class_id
        const professor_id = req.query.professor_id

        if(!class_id || !professor_id ){
            throw new Error ("Um ou mais campos não foram preenchidos")
        }

    
        await connection.raw(`
          UPDATE Professors
          SET class_id = ${class_id}
          WHERE id = ${professor_id};
      `)
        

        res.status(200).send({message: 'Classe do professor alterada!'})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default changeClassProfessor
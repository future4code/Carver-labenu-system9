import express, {Request, Response} from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";


export const changeModuleClass = async(req: Request, res:Response) : Promise <void> => {
    try {
        const module = req.body.module
        const class_id = req.query.class_id

        if(!class_id || !module ){
            throw new Error ("Um ou mais campos não foram preenchidos")
        }

        if(module < 1 || module > 6 ){
            throw new Error ("Modulo deve ser entre 1 e 6")
        }
    
        await connection.raw(`
          UPDATE Class
          SET module = ${module}
          WHERE id = ${class_id};
      `)
        

        res.status(200).send({message: 'Módulo da turma alterado!'})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default changeModuleClass
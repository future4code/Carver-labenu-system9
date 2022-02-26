import { Request, Response } from "express"
import connection from "../../connection";

export async function getActiveClasses(req: Request, res: Response) : Promise<void> {
   try {
      
      const result = await connection.raw(`
        SELECT * FROM Class WHERE module >= "1" AND module <= "6"
      `)

      if (!result.length) {
         res.status(204)
         throw new Error("Não foram encontradas turmas ativas")
      }

      res.status(200).send(result[0])

   } catch (error: any) {
      res.send({ message: error.message || error.sqlMessage || "Algo deu errado "})
   }
}
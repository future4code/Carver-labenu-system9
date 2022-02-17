import { Request, Response } from "express"
import connection from "../../connection";

export async function getActiveClasses(req: Request, res: Response) : Promise<void> {
   try {
      
      const result = await connection.raw(`
        SELECT * FROM Class WHERE module >= "1" AND module <= "6"
      `)

      if (!result.length) {
         res.statusCode = 404
         throw new Error("Não foram encontradas turmas ativas")
      }

      res.status(200).send(result[0])

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}
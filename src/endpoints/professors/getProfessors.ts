import { Request, Response } from "express"
import connection from "../../connection";

export async function getProfessors(req: Request, res: Response) : Promise<void> {
   try {
      
      const result = await connection("Professors")

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No professors found")
      }

      res.status(200).send(result)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}
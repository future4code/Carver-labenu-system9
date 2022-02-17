import { Request, Response } from "express"
import connection from "../../connection";

export async function getStudentByName(  
   req: Request,
   res: Response
): Promise<void> {
   try {
      const name = req.query.name as string;

      const result = await connection("Students")
         .where('name', 'like', `%${name}%`)

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(result)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}
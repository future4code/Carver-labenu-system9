import { Request, Response } from "express"
import connection from "../../connection";
import { Person } from "../../types/person";
import { Professor } from "../../types/Professor";

export async function getProfessors(req: Request, res: Response): Promise<void> {
   try {

      const result = await connection("Professors")

      const hobby = req.query.hobby as string;

      const professor = result.map((prof: Person) => {

        const professors: Person = new Person(prof.id, prof.name, prof.email, prof.birth_date, prof.class_id)

         return result
      })

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No professors found")
      }

      res.status(200).send(professor)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}
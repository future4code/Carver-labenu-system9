import { Request, Response } from "express"
import connection from "../../connection";
import { Person } from "../../types/person";
import { Professor } from "../../types/Professor";

export async function getProfessors(req: Request, res: Response): Promise<void> {
   try {

      const result = await connection("Professors")

      const professor = result.map((prof: Person) => {

         const professors: Person = new Person(prof.id, prof.name, prof.email, prof.birth_date, prof.class_id)

         return professors
      })

      if (!result.length) {
         res.status(204)
         throw new Error("Não existem professores cadastrados")
      }

      res.status(200).send(professor)

   } catch (error: any) {
      res.send({ message: error.message || error.sqlMessage || "Algo deu errado" })
   }
}
import { Request, Response } from "express"
import connection from "../../connection";
import { Person } from "../../types/person";

export async function getStudentByName(  
   req: Request,
   res: Response
): Promise<void> {
   try {
      const name = req.query.name as string;

      const result = await connection("Students")
         .where('name', 'like', `%${name}%`)

         const students = result.map((student: Person) => {

            const result: Person = new Person(student.id, student.name, student.email, student.birth_date, student.class_id)
             
             return result
          })
             
      if (!result.length) {
         res.status(204)
         throw new Error("Não foram encontrados estudantes com esse nome")
      }

      res.status(200).send(result)

   } catch (error: any) {
      res.send({ message: error.message || error.sqlMessage || "Algo deu errado "})
   }
}
import { Request, Response } from "express"
import connection from "../../connection";

export async function getStudentByHobby(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const hobby = req.query.hobby as string;

      const result = await connection.raw(`
      SELECT Students.name  FROM Student_hobby
      JOIN Students
      ON student_id = Students.id
      JOIN Hobbies
      ON hobby_id = Hobbies.id
      WHERE Hobbies.name = "${hobby}";
  `)
console.log(result[0])
      if (!result.length) {
         res.statusCode = 404
         throw new Error("Não foram encontrados estudantes com esse hobby")
      }

      res.status(200).send(result[0])

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}
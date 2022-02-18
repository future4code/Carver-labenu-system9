import { Person } from "./person"

type person = {
    id: string
    name: string
    email: string
    birth_date: string
    class_id: string
}

export class Professor extends Person implements person {

    Specialties: string

    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
        Specialties: string
    ) {
        super(id, name, email, birth_date, class_id) // chama o contrutor da superclasse
        this.Specialties = Specialties
    }


}
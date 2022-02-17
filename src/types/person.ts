
export class Person {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birth_date: string,
        public class_id: string
    ) {

        console.log("construindo uma pessoa")
    }

}
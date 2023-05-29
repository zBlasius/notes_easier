import { Crud } from "../Helpers/crud";
export class Person extends Crud{
    kind = 'Person'
    
    async getAllPerson(){ //* TODO - ver o retoro em allPerson, e declarar a interface de retorno.
        try {
            let _userData = {userEmail:super.email, kind: this.kind};
            const allPerson = await this.listAll(_userData);
            console.log("allPerson", allPerson);
            return allPerson;
        } catch (error) {
            throw error;
        }
    }
}
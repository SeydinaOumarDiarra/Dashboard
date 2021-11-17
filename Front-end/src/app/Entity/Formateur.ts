import { Admin } from "./Admin";
import { User } from "./User";

export class Formateur{
    id: any;
    matricule: any;
    dateAdd: any;
    dateUpdate: any;
    user!: User;
    admin!: Admin;
  }
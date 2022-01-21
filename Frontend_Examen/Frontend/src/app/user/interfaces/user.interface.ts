export interface _User {
    users: User[]
}
export class User {

    constructor(
        public id_user: number,
        public nombres: string,
        public apellido_paterno: string,
        public apellido_materno: string,
        public direccion: string,
        public telefono: number,


    ) { }
}

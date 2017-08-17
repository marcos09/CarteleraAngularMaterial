import {Cartelera} from './cartelera' ;

export class Publicacion {
	constructor(
        public id: number, 
        public titulo: string,
        public descripcion:string,
        public author: string, 
        public comentarios:boolean,
        public cartelera: Cartelera,
        public estado: string,
    ){}
}
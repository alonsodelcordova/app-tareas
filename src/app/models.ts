export interface Tarea{
   id?:number;
   titulo: string;
   descripcion:string;
   usuario_id?:number;
}

export interface UserLogin{
   email:string;
   password:string;
}

export interface TokenUser{
   id?:number;
   token:string;
   usuario_id:number;
   usuario?: UserLogin;  
}
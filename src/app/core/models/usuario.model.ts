export class UsuarioModel{

    constructor(
        
       public readonly _id :string,
       public nombre :string,
       public tipoDocumento :string,
       public noDocumento :number,
       public mail :string,
       public password :string,
       public rol :string,
       public estado :boolean,
       public createdAt :Date,
    ){}

}
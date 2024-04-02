export interface Cliente {
    readonly _id: string;
    nombre: String;
    direccion: String;
    telefono: String;
    email: String;
    tipoDocumento: String;
    noDocumento: String;
    estado: Boolean;
    usuario_id?: String;



}
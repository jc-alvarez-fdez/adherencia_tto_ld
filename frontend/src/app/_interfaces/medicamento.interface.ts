export interface MedObtenido {
  nregistro: string,
  nombre: string,
  labtitular: string,
  triangulo: string,
  docs: Array <{
    tipo: string,
    urlHtml: string
  }>,
  fotos: Array <{
    url: string
  }>,
  viasAdministracion: Array <{
    nombre: string
  }>,
  formaFarmaceuticaSimplificada: Array <{
    nombre: string
  }>,
}


export interface MiMedicamento {
  id_medicamento?: number,
  num_registro?: string,
  nombre?: string,
  laboratorio?: string,
  triangulo_seguim?: boolean,
  inicio_envase?: Date,
  contenido_envase?: number,
  forma_simple?: string,
  via_administracion?: string,
  prospecto?: string,
  imagen?: string,
  consejos?: string
}

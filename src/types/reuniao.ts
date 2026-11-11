export interface CreateReuniaoDTO{
    descricao?: string,
    status: string,
    data_reuniao: Date,
    grupo_id?: number,
    id_criador: number,
    id_etapa_concedida: number

    //deve se colocar as presencas aqui?
    //   //docs também?
}

export interface UpdateReuniaoDTO{
    descricao?: string,
    status?: string,
    data_reuniao?: Date,
    grupo_id?: number,
    id_criador: number,
    id_etapa_concedida?: number
}

export interface CreateReuniaoData{
    descricao?: string,
    status: string,
    data_reuniao: Date,
    grupo_id?: number,
    id_criador: number,
    id_etapa_concedida: number

    //deve se colocar as presencas aqui?
    //   //docs também?
}

export interface UpdateReuniaoData{
    descricao?: string,
    status?: string,
    data_reuniao?: Date,
    grupo_id?: number,
    id_criador: number,
    id_etapa_concedida?: number
}




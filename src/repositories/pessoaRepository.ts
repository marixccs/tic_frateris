import { prisma } from "../config/prisma";
import {
    CreatePessoaData,
    UpdatePessoaData
} from "../types/pessoa";
/*
export function findAll(){
    return prisma.pessoa.findMany({
        orderBy: { nome: "asc" },
    }
    )
}

export function findById(id:number){
    return prisma.pessoa.findUnique({
        where: {id},
    })
}

export function create(data: CreatePessoaData){
    return prisma.pessoa.create({
        data: {
            nome: data.nome,

        }
    }

    )
}
*/
//// não sei se devemos criar esta entidade, por isso vou deixar comentado
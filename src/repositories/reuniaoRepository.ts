import { prisma } from "../config/prisma";
import { CreateReuniaoData,
         UpdateReuniaoData
 } from "../types/reuniao";

 export function findAll(){
    return prisma.reuniao.findMany({
        include: { grupo: true
    }})
 }

 export function findById(id: number){
    return prisma.reuniao.findUnique({
        where: { id },
        include: { grupo: true }
    })
 }

 export function create(data: CreateReuniaoData){
    return prisma.reuniao.create({
        data: {
            descricao: data.descricao,
            status: data.status,
            data_reuniao: data.data_reuniao,
            grupo_id: data.grupo_id,
            id_criador: { connect: {id: data.id_criador}},
            id_etapa_concedida: data.id_etapa_concedida
        }

    })
 }

 export function update(id: number, data: CreateReuniaoData){
    return prisma.reuniao.update({
        where: {id},
        data: {
            descricao: data.descricao,
            status: data.status,
            data_reuniao: data.data_reuniao,
            grupo_id: data.grupo_id,
            id_criador: { connect: {id: data.id_criador}},
            id_etapa_concedida: data.id_etapa_concedida
        }
    })
 }

 export function remove(id: number){
    return prisma.reuniao.delete({
        where: {id}
    })
 }
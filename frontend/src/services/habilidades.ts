import type { ApiHabilidade } from './apiTypes'
import type { Habilidade } from '../types/habilidade'

const BASE_URL = import.meta.env.VITE_API_URL as string | undefined

function habilidadesDaApi(raw: ApiHabilidade[]): Habilidade[] {
  return raw.map((item) => ({
    id: item.id,
    slug: item.slug,
    ordem: item.ordem,
    nome: item.nome,
    chamada: item.chamada,
    pontosPorAcao: item.pontosPorAcao,
    recompensaMissao: item.recompensaMissao,
    final: item.final,
    conteudo: item.conteudo,
    objetivo: item.objetivo,
    parceiro: item.parceiro,
    missao: item.missao,
    etapas: item.etapas,
  }))
}

function url(caminho: string): string {
  if (BASE_URL) return `${BASE_URL}${caminho}`
  return `/data${caminho}`
}

export async function buscarHabilidades(signal?: AbortSignal): Promise<Habilidade[]> {
  const resposta = await fetch(url('/habilidades.json'), { signal })

  if (!resposta.ok) {
    throw new Error(`Não foi possível carregar as habilidades (${resposta.status}).`)
  }

  const dados = (await resposta.json()) as ApiHabilidade[]
  return habilidadesDaApi(dados)
}

export async function buscarHabilidadePorId(
  id: number,
  signal?: AbortSignal,
): Promise<Habilidade | undefined> {
  const habilidades = await buscarHabilidades(signal)
  return habilidades.find((habilidade) => habilidade.id === id)
}

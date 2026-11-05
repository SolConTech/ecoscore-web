export interface ApiHabilidadeEtapa {
  nome: 'Aprender' | 'Validar' | 'Praticar' | 'Conquistar'
  detalhe: string
}

export interface ApiHabilidadeParceiro {
  nome: string
  segmento: string
}

export interface ApiHabilidadeMissao {
  titulo: string
  descricao: string
  objetivo: string
  duracaoDias: number
  dificuldade: 'Iniciante' | 'Intermediário' | 'Avançado'
  co2eEstimadoKg: number
}

export interface ApiHabilidade {
  id: number
  slug: 'reciclagem' | 'consumo' | 'agua' | 'energia'
  ordem: number
  nome: string
  chamada: string
  pontosPorAcao: number
  recompensaMissao: number
  final: boolean
  conteudo: 'completo' | 'em-producao'
  objetivo: string | null
  parceiro: ApiHabilidadeParceiro | null
  missao: ApiHabilidadeMissao | null
  etapas: ApiHabilidadeEtapa[]
}

export interface ApiContatoPayload {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export interface ApiContatoResposta {
  sucesso: boolean
  mensagem: string
}


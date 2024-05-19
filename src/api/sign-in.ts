//Autenticação de usuario dentro do sistema

import { api } from '@/lib/axios'

//Definição da estrutura do objeto esperado
export interface SignInBody {
  email: string
  password: string
  url: string
}

//Faz POST para o endpoint / authenticate
export async function signIn({ email, password, url }: SignInBody) {
  await api.post('/authenticate', { email, password, url })
}

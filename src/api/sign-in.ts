import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
  url: string
}

export async function signIn({ email, password, url }: SignInBody) {
  await api.post('/authenticate', { email, password, url })
}

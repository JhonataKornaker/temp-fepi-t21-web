import { useState } from 'react'

import * as Label from '@radix-ui/react-label'

import * as Separator from '@radix-ui/react-separator'

import { ChevronRight, Eye, EyeOff, Loader2Icon, Send } from 'lucide-react'

import { z } from 'zod'

import { useForm } from 'react-hook-form'

import { toast } from 'sonner'

import { Helmet } from 'react-helmet-async'

import { zodResolver } from '@hookform/resolvers/zod'

const signInFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter ao menos 6 caracteres'),
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SignIn() {
  const [isShowingPassword, setIsShowingPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // TODO: Submit this form data to server
      console.log(data)
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="h-[100dvh] overflow-auto p-20 max-[1100px]:h-auto max-[1100px]:min-h-[calc(100dvh-16px)] max-[1100px]:p-7">
        <div className="mb-12 mt-16 flex flex-col gap-3 max-md:mb-8 max-md:mt-12">
          <h1 className="text-2xl font-bold dark:text-slate-200">
            Acesse sua conta
          </h1>

          <p className="text-sm dark:text-slate-300">
            Eleve seu jogo, acesse a plataforma e conheça o futuro dos seus
            atletas.
          </p>
        </div>

        <form
          action=""
          method="post"
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="flex flex-col gap-2 [&>label]:text-sm dark:[&>label]:text-slate-200">
            <Label.Root htmlFor="email">E-mail</Label.Root>

            <div className="group box-border flex h-12 w-full items-center justify-center gap-2 rounded-md border border-solid px-4 py-3 transition-opacity dark:focus-within:border-lime-400 dark:border-slate-700 dark:bg-slate-900">
              <input
                type="email"
                id="email"
                className="h-full w-full border-none bg-transparent text-base font-normal dark:text-slate-100 outline-none transition-colors dark:placeholder:text-slate-400"
                placeholder="Seu e-mail"
                {...register('email')}
              />
            </div>

            {errors.email && (
              <span className="text-sm font-medium text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 [&>label]:text-sm dark:[&>label]:text-slate-200">
              <Label.Root htmlFor="password">Senha</Label.Root>

              <div className="group box-border flex h-12 w-full items-center justify-center gap-2 rounded-md border border-solid px-4 py-3 transition-opacity dark:focus-within:border-lime-400 dark:border-slate-700 dark:bg-slate-900">
                <input
                  type={isShowingPassword ? 'text' : 'password'}
                  id="password"
                  className="h-full w-full border-none bg-transparent text-base font-normal dark:text-slate-100 outline-none transition-colors dark:placeholder:text-gray-400"
                  placeholder="Sua senha"
                  {...register('password')}
                />

                <span className="flex size-6 flex-shrink-0 items-center justify-center dark:text-slate-500 dark:group-focus-within:text-lime-400 [&>svg]:size-6">
                  <button type="button">
                    {isShowingPassword ? (
                      <EyeOff
                        strokeWidth={1.75}
                        onClick={() => setIsShowingPassword(false)}
                      />
                    ) : (
                      <Eye
                        strokeWidth={1.75}
                        onClick={() => setIsShowingPassword(true)}
                      />
                    )}
                  </button>
                </span>
              </div>

              {errors.password && (
                <span className="text-sm font-medium text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <a
              href="/forgot"
              className="text-sm font-medium dark:text-lime-400 transition hover:brightness-125"
            >
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            className="relative inline-flex flex-shrink-0 cursor-pointer items-center justify-center rounded border-none dark:bg-lime-600 px-8 py-3 text-2xl font-bold dark:text-slate-100 transition-colors duration-200 ease-in-out dark:hover:enabled:bg-lime-700 disabled:cursor-not-allowed disabled:select-none disabled:opacity-70"
            disabled={isSubmitting}
          >
            <div className="flex flex-1 items-center justify-center gap-2">
              {isSubmitting ? (
                <Loader2Icon strokeWidth={3} className="animate-spin size-6" />
              ) : (
                <span className="text-base leading-6">Entrar</span>
              )}
            </div>
          </button>
        </form>

        <Separator.Root
          className="my-14 dark:bg-slate-600 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
          decorative
          orientation="horizontal"
        />

        <a
          href="https://forms.gle/ZLK6CfJvRmofcMbR8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex w-full gap-4 rounded-md border dark:border-slate-600 dark:bg-slate-700 px-6 py-4 transition hover:brightness-125">
            <Send className="mt-2 size-6 dark:text-lime-400" />

            <div className="flex flex-col dark:text-slate-200">
              Não tem uma conta?
              <span className="font-medium dark:text-lime-400">
                Entre em contato com a gente
              </span>
            </div>

            <ChevronRight className="ml-auto size-6 self-center dark:text-slate-400" />
          </div>
        </a>
      </div>
    </>
  )
}

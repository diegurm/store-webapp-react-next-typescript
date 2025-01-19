import { env } from '@/env'

export function api(path: string, init: RequestInit = {}) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  const headers = new Headers(init.headers)
  headers.append('x-api-key', env.NEXT_PUBLIC_API_KEY)

  return fetch(url.toString(), {
    ...init,
    headers,
  })
}
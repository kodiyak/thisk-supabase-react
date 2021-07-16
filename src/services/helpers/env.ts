import { Env } from '../../contracts/env'

export function env(name: keyof Env, defaultValue?: string) {
  return (process.env[`REACT_APP_${name}`] || defaultValue) as string
}

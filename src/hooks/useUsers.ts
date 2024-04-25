import { User } from "@prisma/client"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useUsers() {
  const {data, isLoading, error} = useSWR<User[]>('/api/users', fetcher)

  return {
    users: data,
    isLoading,
    error
  }
}

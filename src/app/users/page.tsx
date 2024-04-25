"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUsers } from "@/hooks/useUsers";

export default function AllUsersPage() {
  const { users, error, isLoading } = useUsers();

  if (isLoading) return <div className="flex min-h-screen flex-col items-center justify-between p-24">Loading...</div>
  if (error) return <div className="flex min-h-screen flex-col items-center justify-between p-24">Failed to load users</div>
  if (!users) return <div className="flex min-h-screen flex-col items-center justify-between p-24">Failed to load users</div>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}

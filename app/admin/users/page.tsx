import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getUsers } from '@/lib/actions/users'
import { UsersRow } from '@/components/admin/users-row'
import { createSsrClient } from '@/lib/supabase/server'

export default async function UsersPage() {
    const supabase = await createSsrClient()
    const { data: auth } = await supabase.auth.getUser()
    const { data: myRolesRows } = await supabase
        .from('user_roles')
        .select('roles(name)')
        .eq('user_id', auth.user?.id || '')
        .eq('is_deleted', false)
    const myRoles = (myRolesRows || []).map((r: any) => r?.roles?.name).filter(Boolean) as string[]
    const allowedEmails = new Set(['a.rashedy99@gmail.com', 'rowyda15@gmail.com'])
    const canManageRoles = myRoles.includes('superadmin') || myRoles.includes('admin') || (auth.user?.email ? allowedEmails.has(auth.user.email) : false)

    const { users, rolesByUserId } = await getUsers(1, 50)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>{canManageRoles ? 'Manage user roles' : 'View users'}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Admin</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map(u => (
                                <UsersRow
                                    key={u.id}
                                    id={String(u.user_id ?? '')}
                                    name={`${u.first_name ?? ''} ${u.last_name ?? ''}`}
                                    email={u.email}
                                    roles={rolesByUserId[String(u.user_id ?? '')] || []}
                                    canManageRoles={canManageRoles}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}


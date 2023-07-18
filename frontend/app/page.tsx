import {UserInfo, Task} from "@/types/task";
import TaskTable from "@/components/TaskTable";
import Header from "@/components/Header";
import {cookies} from 'next/headers'


export default function Home() {
    const uid = cookies().get('uid')?.value as string;

    if (!uid) {
        return (
            <div>
                Please login first.
            </div>
        )

    }

    const userInfo: UserInfo = {
        token: cookies().get('uid')?.value as string,
        first_name: cookies().get('firstname')?.value as string,
        last_name: cookies().get('lastname')?.value as string,
        username: cookies().get('username')?.value as string,
        id: Number(cookies().get('id')?.value)
    }
    return (
        <>
            {/*<p>{uid}</p>*/}
            <Header userInfo={userInfo}/>
            <div
                className="flex flex-col w-screen min-h-screen items-center justify-items-center p-16 gap-y-8">
                <TaskTable/>
            </div>
        </>
    )
}


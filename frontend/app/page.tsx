import Image from 'next/image'
import {taskList} from "@/api/task";
import {Task} from "@/types/task";
import {useCookies} from 'react-cookie';
import TaskTable from "@/components/TaskTable";


export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TaskTable/>
        </main>
    )
}



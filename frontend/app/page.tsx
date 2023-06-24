import Image from 'next/image'
import {taskList} from "@/api/task";
import {Task} from "@/types/task";
import {useCookies} from 'react-cookie';


export default async function Home() {

    const tasks: Task[] = await taskList();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {tasks.map((task, taskId) => {
                return (
                    <>
                        <p key={taskId}>
                            {task.title}
                        </p>
                    </>
                )
            })}
        </main>
    )
}



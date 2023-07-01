import {taskList} from "@/api/task";
import {UserInfo, Task} from "@/types/task";
import TaskTable from "@/components/TaskTable";
import Header from "@/components/Header";
import {cookies} from 'next/headers'


export default async function Home() {
    const tasks: Task[] = await taskList();
    const taskMap = getTaskMap(tasks);
    const owners = Array.from(taskMap.keys());
    const uid = cookies().get('uid')?.value as string;
    const userInfo: UserInfo = {
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
                {owners.map((owner, i) => {
                    let _tasks = taskMap.get(owner) as Task[];
                    return (
                        <div key={i} className={"w-1/2 border-b-2 border-b-sky-400 border-opacity-40"}>
                            <TaskTable key={i} owner={owner} tasks={_tasks}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

function getTaskMap(tasks: Task[]): Map<String, Task[]> {
    const taskMap: Map<String, Task[]> = new Map();

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let owner = task.owner.username;
        if (!taskMap.has(owner)) taskMap.set(owner, [] as Task[]);
        taskMap.set(owner, [task, ...taskMap.get(owner) as Task[]]);
    }

    return taskMap;
}



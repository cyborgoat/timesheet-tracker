'use client';
import Image from 'next/image'
import {taskList} from "@/api/task";
import {Owner, Task} from "@/types/task";
import TaskTable from "@/components/TaskTable";
import Header from "@/components/Header";


export default async function Home() {
    const tasks: Task[] = await taskList();
    const taskMap = getTaskMap(tasks);
    const owners = Array.from(taskMap.keys());
    return (
        <>
            <Header/>
            <div
                className="flex flex-col w-screen min-h-screen items-center justify-items-center p-16 gap-y-8">
                {owners.map((owner, i) => {
                    let _tasks = taskMap.get(owner) as Task[];
                    return (
                        <>
                            <div className={"w-1/2 border-b-2 border-b-sky-400 border-opacity-40"}>
                                <TaskTable key={i} owner={owner} tasks={_tasks}/>
                            </div>
                        </>
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



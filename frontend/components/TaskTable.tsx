'use client';
import {UserInfo, Task} from "@/types/task";
import {it} from "node:test";
import {taskList} from "@/api/task";
import React, {MouseEvent} from 'react';

export default async function TaskTable() {
    const tasks: Task[] = await taskList();
    const taskMap = getTaskMap(tasks);
    const owners = Array.from(taskMap.keys());
    return (
        <div
            className="flex flex-col w-screen min-h-screen items-center justify-items-center p-16 gap-y-8">
            {owners.map((owner, i) => {
                let _tasks = taskMap.get(owner) as Task[];
                return (
                    <div key={i} className={"w-1/2 border-b-2 border-b-sky-400 border-opacity-40"}>
                        <div className={"flex flex-row"}>
                            <div className={"basis-1/4"}>
                                {owner}
                            </div>
                            <div className={"basis-3/4"}>
                                <ul className={"list-disc list-inside"}>
                                    {_tasks.map((task, taskId) =>
                                        <li key={taskId} className={"align-middle relative my-2"}>
                                            <span className={"mx-4"}>{task.title}</span>
                                            <div className={"absolute inset-y-0 right-0"}>
                                                <input type="checkbox"
                                                       onClick={() => toggleFinishStatus(task)}
                                                       defaultChecked={task.finished}
                                                       className={`checkbox checkbox-sm align-middle dark:border-sky-200 dark:border-opacity-40 `}/>
                                            </div>
                                        </li>)
                                    }


                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function toggleFinishStatus(task: Task) {
    const updateApiUrl = process.env.NEXT_PUBLIC_DB_ADDRESS + `/api/ts/detail/${task.id}/`
    fetch(updateApiUrl, {
        method: 'PUT',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Token eefe418c6e06c6eb1e7d0605dff585804c32753b', // Here you can add your token
        },
        body: JSON.stringify({"finished": !task.finished})
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
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



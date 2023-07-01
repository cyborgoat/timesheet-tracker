'use client';
import {UserInfo, Task} from "@/types/task";
import {it} from "node:test";
import {taskList} from "@/api/task";
import React, {MouseEvent} from 'react';

export default async function TaskTable(props: { owner: String, tasks: Task[] }) {
    const headers = ['Owner', 'Title', 'Start', 'End', 'Description']
    return (
        <div className={"flex flex-row"}>
            <div className={"basis-1/4"}>
                {props.owner}
            </div>
            <div className={"basis-3/4"}>
                <ul className={"list-disc list-inside"}>
                    {props.tasks.map((task, taskId) =>
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
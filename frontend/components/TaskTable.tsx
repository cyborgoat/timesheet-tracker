import {Owner, Task} from "@/types/task";
import {it} from "node:test";
import {taskList} from "@/api/task";

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
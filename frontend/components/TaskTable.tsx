import {Task} from "@/types/task";
import {it} from "node:test";
import {taskList} from "@/api/task";

export default async function TaskTable() {
    const tasks: Task[] = await taskList();
    const headers = ['Owner', 'Title', 'Start', 'End', 'Description']
    return (
        <>
            <table className="table-auto border-collapse border border-slate-400">
                <thead>
                <tr>
                    {headers.map((header, headerIdx) => <th key={headerIdx}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                {tasks.map((item, itemIdx) => {
                        return (
                            <tr key={itemIdx}>
                                <td>{item.owner.first_name}</td>
                                <td>{item.title}</td>
                                <td>{item.start}</td>
                                <td>{item.end}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </>
    )

}
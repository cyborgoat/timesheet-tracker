'use client';
import {useState} from "react";
import React from "react";
import {TaskForm} from "@/types/task";
import {createTask} from "@/api/task";

export default function TaskForm() {
    const [formMessage, setFormMessage] = useState('');
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const now = new Date();
    const nowMonth = String(now.getMonth()).padStart(2, '0');
    const nowDay = String(now.getDate()).padStart(2, '0');
    const nowHour = String(now.getHours()).padStart(2, '0');
    const nowMinutes = String(now.getMinutes()).padStart(2, '0');
    const nowTimeStr = `${now.getFullYear()}-${nowMonth}-${nowDay} ${nowHour}:${nowMinutes}`
    const [startTime, setStartTime] = useState(nowTimeStr);
    const [endTime, setEndTime] = useState(nowTimeStr);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const taskForm: TaskForm = {
            title: title,
            description: description,
            start: startTime,
            end: endTime
        }
        const res = await createTask(taskForm, 'eefe418c6e06c6eb1e7d0605dff585804c32753b');
        setFormMessage(res.status);
    };
    return (
        <>
            <h3 className="text-2xl font-bold border-b-2 border-slate-800/50 mb-1">Create a New Task</h3>
            <span className={'text-orange-300 mb-4'}>{formMessage}</span>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    <span className="text-lg label-text text-slate-50">Title</span>
                </label>
                <input type="text" placeholder="Type here"
                       className="input input-bordered w-full max-w-md bg-transparent text-sm"
                       onChange={event => setTitle(event.target.value)}/>

                <div className={"flex flex-row"}>
                    <div className={"w-1/2"}>
                        <label className={"label"}>
                            <span className={"text-lg label-text text-slate-50"}>Start Time</span>
                        </label>
                        <input type={"text"} placeholder={"Enter time"}
                               className={"input input-bordered w-1/2 max-w-lg bg-transparent text-sm"}
                               value={startTime}
                               onChange={e => setStartTime(e.target.value)}
                        />
                    </div>
                    <div className={"w-1/2"}>
                        <label className={"label"}>
                            <span className={"text-lg label-text text-slate-50"}>End Time</span>
                        </label>
                        <input type={"text"} placeholder={"Enter time"}
                               className={"input input-bordered w-1/2 max-w-lg bg-transparent text-sm"}
                               value={endTime}
                               onChange={e => setEndTime(e.target.value)}
                        />
                    </div>

                </div>

                <label className="label">
                    <span className="text-lg label-text text-slate-50">Description</span>
                </label>
                <textarea className="textarea textarea-bordered h-24 min-w-full bg-transparent text-sm"
                          placeholder="Your description here..."
                          onChange={event => setDescription(event.target.value)}>
                </textarea>
                <div className={"py-6"}>
                    <button className="btn btn-neutral" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </>
    )
}
'use client';
import {useState} from "react";
import React from "react";

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(title, description)
    };
    return (
        <>
            <h3 className="text-2xl font-bold border-b-2 border-slate-800/50 mb-6">Create a New Task</h3>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    <span className="text-lg label-text text-slate-50">Title</span>
                </label>
                <input type="text" placeholder="Type here"
                       className="input input-bordered w-full max-w-xs bg-transparent text-sm"
                       onChange={event => setTitle(event.target.value)}/>
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
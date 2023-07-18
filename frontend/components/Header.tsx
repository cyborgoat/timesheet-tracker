'use client'
import {getCookie} from 'cookies-next';
import {UserInfo} from "@/types/task";
import TaskForm from "@/components/TaskForm";

export default function Header(props: { userInfo: UserInfo }) {

    return (
        <div className="navbar bg-base-100 rounded-2xl w-11/12 mx-auto">
            <div className="navbar-start ml-6">
                {/*<div className="dropdown">*/}
                {/*    <label tabIndex={0} className="btn btn-ghost btn-circle">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"*/}
                {/*             stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*                  d="M4 6h16M4 12h16M4 18h7"/>*/}
                {/*        </svg>*/}
                {/*    </label>*/}
                {/*    <ul tabIndex={0}*/}
                {/*        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">*/}
                {/*        <li><a>Homepage</a></li>*/}
                {/*        <li><a>Portfolio</a></li>*/}
                {/*        <li><a>About</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <span>Welcome, {props.userInfo.first_name}</span>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">SAS Task Tracker</a>
            </div>
            <div className="navbar-end mr-6">
                <label htmlFor="task_form" className="btn btn-sm btn-outline btn-accent">add task</label>
                <input type="checkbox" id="task_form" className="modal-toggle"/>
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-slate-600">
                        <TaskForm userInfo={props.userInfo}/>
                        <div className="modal-action">
                            <label htmlFor="task_form" className="btn btn-sm btn-outline">Close</label>
                        </div>
                    </div>
                </div>
                {/*<button className="btn btn-ghost btn-circle">*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"*/}
                {/*         stroke="currentColor">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>*/}
                {/*    </svg>*/}
                {/*</button>*/}
                {/*<button className="btn btn-ghost btn-circle">*/}
                {/*    <div className="indicator">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"*/}
                {/*             stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>*/}
                {/*        </svg>*/}
                {/*        <span className="badge badge-xs badge-primary indicator-item"></span>*/}
                {/*    </div>*/}
                {/*</button>*/}
            </div>
        </div>
    )
}
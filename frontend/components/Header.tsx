'use client'
import {getCookie} from 'cookies-next';
import {UserInfo} from "@/types/task";
import TaskForm from "@/components/TaskForm";

export default async function Header(props: { userInfo: UserInfo }) {

    // @ts-ignore
    return (
        <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            Welcome Back, {props.userInfo.first_name} {props.userInfo.last_name}!
                        </h1>

                        <p className="mt-1.5 text-sm text-gray-300">
                            Let's keep your tasks on track! 🎉
                        </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        {/*<button*/}
                        {/*    className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"*/}
                        {/*    type="button"*/}
                        {/*>*/}
                        {/*    Create a task*/}
                        {/* The button to open modal */}
                        <label htmlFor="task_form" className="btn">open modal</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="task_form" className="modal-toggle"/>
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <TaskForm/>
                                <div className="modal-action">
                                    <label htmlFor="task_form" className="btn">Close!</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

async function getUid(): Promise<String> {
    const uid = getCookie('uid') as String;
    console.log(uid)
    return uid;
}

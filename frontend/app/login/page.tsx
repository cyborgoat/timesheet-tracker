'use client';
import {setCookie} from "cookies-next";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [uid, setUid] = useState('');
    return (
        <>
            <article className="max-w-xl h-screen px-6 py-32 mx-auto space-y-12 dark:text-gray-50">
                <div className="w-full mx-auto space-y-4 text-center">
                    <p className="text-xs font-semibold tracki uppercase">#SAS Task Tracker</p>
                    <h1 className="text-4xl font-bold leadi md:text-5xl">Enter your UID </h1>
                    <form className={"w-1/2 flex flex-col content-center justify-items-center mx-auto pt-4 gap-4"}
                          onSubmit={(e) => {
                              e.preventDefault();
                              setCookie('uid', uid)
                              router.push('/');
                          }
                          }>
                        <div>
                            <input type="text" placeholder="Type here"
                                   className="input input-bordered input-primary w-full max-w-xs"
                                   onChange={(event) => setUid(event.target.value)}/>
                        </div>
                        <div>
                            <button className="btn" type={"submit"}>Submit</button>
                        </div>
                    </form>
                </div>
            </article>

        </>
    )
}
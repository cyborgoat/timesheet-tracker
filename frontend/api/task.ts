import {TaskForm} from "@/types/task";

export async function taskList() {
    const dataUrl = process.env.NEXT_PUBLIC_DB_ADDRESS + '/api/ts/tasks/'
    const res = await fetch(dataUrl, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Token eefe418c6e06c6eb1e7d0605dff585804c32753b' // Here you can add your token
        },
        cache: 'no-cache',
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function createTask(taskForm: TaskForm, token: String) {
    const dataUrl = process.env.NEXT_PUBLIC_DB_ADDRESS + '/api/ts/tasks/'
    const res = await fetch(dataUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${token}` // Here you can add your token
        },
        body: JSON.stringify(taskForm),
        cache: 'no-cache',
    });

    return res.json()

}

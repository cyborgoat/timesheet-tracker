import {UserInfo} from "@/types/task";

export async function getUserInfo(token: string): Promise<UserInfo> {
    const dataUrl = process.env.NEXT_PUBLIC_DB_ADDRESS + '/api/ts/me'
    const res = await fetch(dataUrl, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Token ${token}` // Here you can add your token
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
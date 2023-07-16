export interface UserInfo {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
}

export interface Task {
    id: number,
    owner: UserInfo,
    title: string,
    description: string,
    start: string,
    end: string,
    is_active: boolean,
    finished: boolean,
}

export interface TaskForm {
    title: string,
    description: string
}
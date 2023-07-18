export interface UserInfo {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    token: string,
    is_staff: boolean,
    is_superuser: boolean,
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

export type TaskForm = Omit<Task, 'id' | 'owner' | 'is_active' | 'finished'>
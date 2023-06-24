export interface Owner {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
}

export interface Task {
    id: number,
    owner: Owner,
    title: string,
    description: string,
    start: string,
    end: string,
    is_active: boolean,
    finished: boolean,
}
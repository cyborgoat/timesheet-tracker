export default function TaskForm() {

    return (
        <>
            <h3 className="text-2xl font-bold">Create New Task</h3>
            <form>
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea className="textarea textarea-bordered h-24 min-w-full"
                          placeholder="Your description here..."></textarea>
                <div className={"py-6"}>
                    <button className="btn btn-neutral" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </>
    )
}
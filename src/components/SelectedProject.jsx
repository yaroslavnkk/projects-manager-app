export default function SelectedProject({project, onDeleteProject}){
    const dateFormatter = new Date(project.dueDate).toLocaleDateString('en-US',{
        year : "numeric",
        month : "short",
        day : "numeric"
    })
    return <div className="w-[35rem] mt-18 p-8">
        <header className=" pb-4 mb-4 border-b-2">
            <div className="flex items-center justify-between">
                <h1 className='text-3xl font-bold text-white mb-2'>{project.title}</h1>
                <button onClick={onDeleteProject} className="p-2 w-100px px-3 text-white rounded-md hover:bg-red-400 focus:outline-none duration-100 ease-in-out">Delete project</button>
            </div>
            <p className="mb-4 text-stone-400">{dateFormatter}</p>
            <p className="text-white mb-4 whitespace-pre-wrap">{project.description}</p>
        </header>
    </div>
}
export default function Sidebar({ onSelectExistingProject ,onSelectProject, projects}){
    return(
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <h2 className="mb-8 font-bold uppercase md-text-xl text-stone-50">Your projects</h2>
            <div className="flex flex-col items-center justify-between p-2 gap-4">
                <button onClick={onSelectProject}
                        className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white">+
                    Add project
                </button>
                <ul className="space-y-2">
                    {projects.map((project) => <li key={project.id}>
                        <button
                            onClick={() => onSelectExistingProject(project.id)}
                            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-none dark:text-gray-800 rounded-md  sm:w-auto hover:bg-gray-900 hover:text-white">{project.title}</button>
                    </li>)}
                </ul>
            </div>
        </aside>
    );
}
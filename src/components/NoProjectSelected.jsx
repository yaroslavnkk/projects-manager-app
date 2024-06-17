import noProjectImage from '../assets/images/no-projects.png'
export default function NoProjectSelected({onSelectProject}) {
    return <div className="mt-24 text-center w-2/3">
        <img src={noProjectImage} alt="Empty task list" className="w-16 h-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold text-white my-4">No Project Selected</h2>
        <p className="text-white mb-4">Select a project or create one</p>
        <p className="mt-8">
            <button onClick={onSelectProject} className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white">
                Create Project
            </button>
        </p>
    </div>
}
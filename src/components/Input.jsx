export default function Input({isTextArea, label, ...props}){
    const classes = "w-[700px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    return <p>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        {isTextArea ? <textarea className={classes} {...props}/> : <input className={classes} {...props}/>}
    </p>
}
import { forwardRef } from 'react'
const Input = forwardRef(function Input({isTextArea, label, ...props}, ref){
    const classes = "w-[600px] bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    return <p>
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">{label}</label>
        {isTextArea ? <textarea ref={ref} className={classes} {...props}/> : <input className={classes} ref={ref} {...props}/>}
    </p>
});

export default Input;
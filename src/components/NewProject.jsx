import Input from './Input.jsx'
import NewProjectButton from "./NewProjectButton.jsx"
import { useRef } from 'react'
export default function NewProject({onCancel, onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    function handleSaveData(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // some validation ...
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return (
        <div className="mt-2">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <NewProjectButton onClick={onCancel} buttonName="Cancel"/>
                </li>
                <li>
                    <NewProjectButton buttonName="Save" onClick={handleSaveData}/>
                </li>
            </menu>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <Input label="Name" ref={title} />
                <Input label="Description" ref={description} isTextArea/>
                <Input type="date" label="Due Date" ref={dueDate} />
            </div>
        </div>
    );
}
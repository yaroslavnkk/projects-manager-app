import Input from './Input.jsx'
import NewProjectButton from "./NewProjectButton.jsx";
export default function NewProject(){
    return (
        <div className="mt-2">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <NewProjectButton buttonName="Cancel"/>
                </li>
                <li>
                    <NewProjectButton buttonName="Save"/>
                </li>
            </menu>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <Input label="Name"/>
                <Input label="Description" isTextArea/>
                <Input label="Due Date" />
            </div>
        </div>
    );
}
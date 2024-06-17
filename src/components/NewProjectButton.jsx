export default function NewProjectButton({buttonName}) {
    const buttonClassName = buttonName === "Cancel" ? "w-[100px] rounded-full px-5 py-3 text-black mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700" : "w-[100px] rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700";
    return <button className={buttonClassName}>{buttonName}</button>;
}

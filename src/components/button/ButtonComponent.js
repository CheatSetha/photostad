import Link from "next/link";

export default function ButtonComponent({name,type,goto ,isBold}){
    let text_bold = ""
    if(isBold){
       text_bold = " font-bold "
    }
    
    return (
        <>
        <Link href={goto}>
            <button type={type} class={text_bold+ "focus:outline-none text-white bg-[#E85854] hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-[16px] text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}>
                {name}
            </button>
        </Link>
        </>
    )
}
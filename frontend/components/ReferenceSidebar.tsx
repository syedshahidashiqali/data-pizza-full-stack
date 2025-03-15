import { DocumentI } from "@/types"
import { FC } from "react"

interface ReferenceSidebarPropsI {
    documents: DocumentI[];
    onCloseSidebar: () => void;
}
const ReferenceSidebar: FC<ReferenceSidebarPropsI> = ({ documents, onCloseSidebar }) => {
    return (
        <div className="w-1/3 bg-gray-800 p-4 border-l border-gray-700 overflow-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mb-2">Reference Documents</h2>
                <button onClick={onCloseSidebar} className="cursor-pointer rounded-md w-8 h-8 bg-red-900 mb-2">X</button>
            </div>
            <div className="space-y-3">
                {documents?.map((doc, index) => (
                    <div key={index} className="p-3 bg-gray-700 rounded-lg">
                        <h3 className="font-semibold">{doc.title}</h3>
                        <p className="text-sm text-gray-300">{doc.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReferenceSidebar;
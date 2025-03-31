
import DocsCodePart from "../attribute/code";
import DocsHeader from "../header";
import { APIMainTemplateProps, MainTemplateProps } from "@/models/main";

export default function PythonMainTemplate({
    path, heading, description, code, responseBody
}: APIMainTemplateProps) {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen">
            {/* Left Sidebar */}
            <DocsHeader />
            {/* Main Content */}
            <div className="flex-1 pt-18 sm:pt-10 min-h-screen bg-gray-800 shadow-md py-10 px-12 sm:px-14 sm:ml-64">
                <span className="text-sm text-gray-300 block">{path}</span>
                <h1 className="text-xl sm:text-2xl font-bold mb-4">{heading}</h1>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{description}</p>

                {/* Request Body */}
                <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">Request Body</h2>
                <div className="flex flex-wrap space-x-2 mb-2">
                    <button className="bg-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none">
                        python3
                    </button>
                </div>

                {/* Code Block */}
                <DocsCodePart output={code} />

                {/* Response Body */}
                <h2 className="text-lg sm:text-xl font-bold mt-6 mb-2">Response Body</h2>

                {/* Code Block */}
                <DocsCodePart output={responseBody} />
            </div>
        </div>
    );
}

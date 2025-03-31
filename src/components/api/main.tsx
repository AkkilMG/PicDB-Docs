import { env } from "@/config/env.config";
import DocsCodePart from "../attribute/code";
import DocsParametersPart from "../attribute/parameters";
import DocsHeader from "../header";
import { useEffect, useState } from "react";
import { MainTemplateProps } from "@/models/main";

export default function MainTemplate({
    path, heading, description, endDescription, 
    request, pathParameters, responseBody
}: MainTemplateProps) {
    const [json, setJson] = useState(true);

    useEffect(() => {
        if (request.requestBody.json) {
            setJson(true);
        } else {
            setJson(false);
        }
    }, [request.requestBody.json]);

    const icons = [
        (<>
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </>), (
            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#292D32"/>
        )
    ];
    const [icon, setIcon] = useState(0);

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`${env.API_URL}${request.url}`);
            setIcon(1);
            setTimeout(() => {
                setIcon(0);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    };

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen">
            {/* Left Sidebar */}
            <DocsHeader />
            {/* Main Content */}
            <div className="flex-1 pt-18 sm:pt-10 min-h-screen bg-gray-800 shadow-md py-10 px-12 sm:px-14 sm:ml-64">
                <span className="text-sm text-gray-300 block">{path}</span>
                <h1 className="text-2xl font-bold mb-4">{heading}</h1>
                <p className="text-gray-400 mb-4">{description}</p>

                <h2 className="text-xl font-bold mt-6 mb-2">End points</h2>
                <p className="text-gray-400 mb-4">{endDescription}</p>

                {/* Endpoint Example */}
                <div className="hidden  bg-gray-700 p-2 rounded text-sm sm:flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <span className="font-mono break-all">
                        <span className="text-green-500 capitalize">{request.type}</span> {env.API_URL}{request.url}
                    </span>
                    <button onClick={handleCopyToClipboard} className="mt-2 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="p-2 w-8 h-8 rounded-lg text-gray-50 hover:bg-gray-800">
                            {icons[icon]}
                        </svg>
                    </button>
                </div>
                
                <div className="sm:hidden bg-gray-700 p-2 rounded text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div className="flex items-center space-x-4 font-mono">
                        <span className="text-green-500 capitalize">{request.type}</span>
                        <span className="py-2 max-w-[10rem] overflow-x-auto whitespace-nowrap">{env.API_URL}{request.url}</span>
                        <button onClick={handleCopyToClipboard} className="p-2 w-8 h-8 rounded-lg text-gray-50 hover:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                {icons[icon]}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Request Body */}
                <h2 className="text-xl font-bold mt-6 mb-2">Request Body</h2>
                <div className="flex space-x-2 mb-2">
                    {request.requestBody.json && (
                        <button className={`${json ? 'bg-gray-600' : 'hover:bg-gray-600'} rounded-md px-4 py-2 text-sm focus:outline-none`}
                        onClick={() => setJson(true)} >
                            json
                        </button>
                    )}
                    {request.requestBody.curl && (
                    <button className={`${!json ? 'bg-gray-600' : 'hover:bg-gray-600'} rounded-md px-4 py-2 text-sm focus:outline-none`}
                    onClick={() => setJson(false)} >
                        cURL
                    </button>
                    )}
                </div>

                {/* Code Block */}
                <DocsCodePart output={json ? request.requestBody.json : request.requestBody.curl} />

                {/* Path Parameters */}
                {pathParameters && (
                    <DocsParametersPart data={pathParameters} />
                )}

                {/* Response Body */}
                <h2 className="text-xl font-bold mt-6 mb-2">Response Body</h2>

                {/* Code Block */}
                <DocsCodePart output={responseBody} />
            </div>
        </div>
    );
}

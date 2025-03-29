


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
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen ">
            {/* Left Sidebar */}
            <DocsHeader />
            {/* Main Content */}
            <div className="flex-1 min-h-screen bg-gray-800 shadow-md py-10 px-14 sm:ml-64">
                <span className="text-sm text-gray-300">{path}</span>
                <h1 className="text-2xl font-bold mb-4">{heading}</h1>
                <p className="text-gray-400 mb-4">{description}</p>

                <h2 className="text-xl font-bold mt-6 mb-2">End points</h2>
                <p className="text-gray-400 mb-4">{endDescription}</p>

                {/* Endpoint Example */}
                <div className="bg-gray-700 p-2 rounded text-sm flex items-center justify-between">
                    <span className="font-mono">
                        <span className="text-green-500 capitalize">{request.type}</span> {env.API_URL}{request.url}
                        {/* <span className="text-orange-400">{'{batchId}'}</span> */}
                    </span>
                    <button className="hover:bg-gray-600 rounded p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> 
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108a2.25 2.25 0 0 0-2.25-2.25H6.108a2.25 2.25 0 0 0-2.25 2.25v1.392m6 3.75V9.792a2.25 2.25 0 0 0 2.25-2.25h1.392a2.25 2.25 0 0 0 2.25 2.25v1.392m-3 6V16.108a2.25 2.25 0 0 0-2.25-2.25H15.108a2.25 2.25 0 0 0-2.25 2.25v1.392m-6-3.75V11.792a2.25 2.25 0 0 0 2.25-2.25h1.392a2.25 2.25 0 0 0 2.25 2.25v1.392" />
                        </svg>
                    </button>
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
                    <button className={`${!json ? 'bg-gray-600' : 'hover:bg-gray-600'} rounded-md px-4 py-2 text-sm hover:bg-gray-600 focus:outline-none`}
                    onClick={() => setJson(false)} >
                        cURL
                    </button>
                    )}
                </div>

                {/* Code Block */}
                <DocsCodePart output={json? request.requestBody.json : request.requestBody.curl} />

                {/* Path Parameters */}
                {pathParameters && (
                    <DocsParametersPart data={pathParameters} />
                )}

                {/* Request Body */}
                <h2 className="text-xl font-bold mt-6 mb-2">Response Body</h2>

                {/* Code Block */}
                <DocsCodePart output={responseBody} />

            </div>
        </div>
    );
}
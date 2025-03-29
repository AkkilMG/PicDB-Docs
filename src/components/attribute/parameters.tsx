"use client";

import { env } from "@/config/env.config";
import { useState } from "react";


export default function DocsParametersPart({data, url}: any) {
    const icons = [
        (<>
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </>), (
            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#292D32"/>
        )
    ]
    const [icon, setIcon] = useState(0);

    const handleCopyToClipboard = async (param: string) => {
        try {
            await navigator.clipboard.writeText(`${env.API_URL}?${param}=`);
            setIcon(1);
            setTimeout(() => {
                setIcon(0);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    };
    return (
        <>
        <h2 className="text-xl font-bold mt-6 mb-2">Path Parameters</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Parameter
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Required
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
                
                {data && data.map((item: any, index: any) => (
                    <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{item['parameter']}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{item['type']}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{item['required']}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-300">{item['description']}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button onClick={(e) => handleCopyToClipboard(`${item['parameter']}`)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-2 mr-2 p-2 w-8 h-8 rounded-lg text-gray-50 hover:bg-gray-700">
                                {icons[icon]}
                            </svg>
                        </button>
                    </td>
                    </tr>
                ))}
                
            </tbody>
            </table>
        </div>
        </>
    );
}
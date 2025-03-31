"use client";

import { useState } from "react";

export default function DocsCodePart({ output }: any) {
    const icons = [
        (<>
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>), (
            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#292D32" />
        )
    ];
    const [icon, setIcon] = useState(0);

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(output);
            setIcon(1);
            setTimeout(() => {
                setIcon(0);
            }, 1000);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    };

    return (
        <div className="bg-gray-900 rounded-md p-5 relative">
            <div className="flex justify-end space-x-2 absolute top-1 right-2">
                <button onClick={handleCopyToClipboard}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-2 mr-2 p-2 w-8 h-8 rounded-lg text-gray-50 hover:bg-gray-700">
                        {icons[icon]}
                    </svg>
                </button>
            </div>
            <pre className="text-sm overflow-x-auto sm:text-xs md:text-sm">
                <code className="language-json break-words">
                    {output}
                </code>
            </pre>
        </div>
    );
}

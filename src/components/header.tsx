"use client";

import { useState } from "react";



export default function DocsHeader() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Sidebar Toggle Button - Only Visible on Mobile */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                aria-controls="default-sidebar" 
                type="button" 
                className="sm:hidden fixed top-4 left-4 z-50 p-2 text-gray-500 rounded-lg bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside id="default-sidebar" aria-label="Sidebar"
                className={`pt-10 sm:pt-2 fixed top-0 left-0 z-40 w-64 h-screen border-r-4 border-gray-800 bg-gray-50 dark:bg-gray-900 transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
            >
        {/* <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-4 border-gray-800" aria-label="Sidebar"> */}
            <div className="h-full pl-8 sm:pl-5 pt-10 px-5 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">

                <a href="/" className="flex items-center mb-4">
                    <img src="/logo/logo.png" className="h-12" alt="Logo" />
                    <span className="ml-3 font-mono self-center text-3xl font-semibold whitespace-nowrap dark:text-white">PicDB</span>
                </a>

                <ul className="space-y-2 font-medium">
                    <li><a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.65 472.65" xmlSpace="preserve" className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor">
                            <g><g><rect x="0.017" width="472.615" height="19.692"/></g></g>
                            <g><g><path d="M29.556,39.382v206.796h413.538V39.382H29.556z M403.71,137.851h-19.692v-35.308l-96.038,96.038l-59.077-59.077
                                        l-88.615,88.615l-29.538-29.538l-34.846,34.847l-13.922-13.923l48.769-48.769l29.538,29.538l88.615-88.615l59.077,59.077
                                        l82.115-82.115h-35.307V68.928h68.923V137.851z"/></g></g>
                            <g><g><path d="M472.633,265.851H0.017v19.692l29.538,0.03h97.226L75.537,433.659h-0.099c-5.12,15.458,3.151,32.295,18.609,37.415
                                        c3.151,1.083,6.302,1.575,9.354,1.575c12.406,0,23.926-7.778,28.062-20.086l57.69-166.991h17.633v128
                                        c0,16.246,13.292,29.538,29.538,29.538s29.538-13.292,29.538-29.538v-128h17.637l57.686,166.892
                                        c4.135,12.308,15.655,20.185,28.062,20.185c3.052,0,6.203-0.492,9.354-1.575c15.458-5.12,23.729-21.957,18.609-37.415
                                        L345.88,285.573l126.753-0.03V265.851z"/></g></g>   
                        </svg>
                        <span className="ms-3">Introduction</span>
                    </a></li>
                    <li><a href="/upload" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 16V3M12 3L16 7.375M12 3L8 7.375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Upload</span>
                    </a></li>
                    <li><a href="/download" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>    
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Download</span>
                    </a></li>
                    <li><a href="/view" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="800px" height="800px" stroke="currentColor" viewBox="-3.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"></path>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">View</span>
                    </a></li>
                    <li><a href="/details" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 4.59613V4.60917V5.03217V6.0239C0 6.39632 0.392549 6.63803 0.725094 6.47037L1.61065 6.0239L1.98836 5.83347L2 5.82761L3.4037 5.11991L3.47443 5.08425L4.13583 4.75079L4.73945 4.44647C5.10599 4.26167 5.10599 3.73833 4.73945 3.55353L4.13583 3.24921L3.47443 2.91576L3.4037 2.8801L2 2.1724L1.98836 2.16653L1.61065 1.9761L0.725095 1.52963C0.392549 1.36197 0 1.60368 0 1.9761V2.96784V2.96784V3.39084V3.40387V4.59613ZM9 3C8.44772 3 8 3.44772 8 4C8 4.55229 8.44772 5 9 5H14V12H4V9C4 8.44772 3.55228 8 3 8C2.44772 8 2 8.44772 2 9V12C2 13.1046 2.89543 14 4 14H14C15.1046 14 16 13.1046 16 12V5C16 3.89543 15.1046 3 14 3H9ZM5 7C5 6.44772 5.44772 6 6 6H12C12.5523 6 13 6.44772 13 7C13 7.55229 12.5523 8 12 8H6C5.44772 8 5 7.55229 5 7ZM6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9H6Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Details</span>
                    </a></li>
                    <li>
                        <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                            <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                                <path d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z"></path>
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Python</span>
                        </span>
                        <ul className="pt-4 pl-4 space-y-2">
                            <li>
                                <a href="/python/installation" className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 26 26" xmlSpace="preserve">
                                        <g>
                                        <g><path d="M22.934,11.19V8.705l-2.955-0.482c-0.176-0.699-0.45-1.357-0.813-1.961l1.723-2.456l-1.756-1.755
                                                l-2.424,1.743c-0.604-0.366-1.267-0.646-1.971-0.82l-0.516-2.941h-2.484L11.26,2.965c-0.706,0.173-1.371,0.448-1.977,0.812
                                                L6.866,2.051L5.11,3.806l1.7,2.431C6.442,6.846,6.163,7.51,5.985,8.22L3.066,8.705v2.484l2.916,0.516
                                                c0.176,0.71,0.456,1.375,0.824,1.985l-1.723,2.409l1.756,1.757l2.434-1.704c0.608,0.365,1.271,0.642,1.977,0.815l0.488,2.934
                                                h2.484l0.521-2.941c0.701-0.178,1.363-0.457,1.967-0.824l2.451,1.721l1.755-1.757l-1.749-2.429
                                                c0.362-0.604,0.637-1.263,0.811-1.964L22.934,11.19z M13,13.431c-1.913,0-3.464-1.55-3.464-3.464c0-1.912,1.551-3.463,3.464-3.463
                                                s3.463,1.551,3.463,3.463C16.464,11.881,14.913,13.431,13,13.431z"/></g>
                                        <path d="M24,18.967v4c0,0.551-0.448,1-1,1H3c-0.552,0-1-0.449-1-1v-4H0v4c0,1.656,1.344,3,3,3h20
                                            c1.656,0,3-1.344,3-3v-4H24z"/>
                                        </g>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Installation</span>
                                </a>
                            </li>
                            <li>
                                <a href="/python/upload-local" className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 16V3M12 3L16 7.375M12 3L8 7.375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Upload Local</span>
                                </a>
                            </li>
                            <li>
                                <a href="/python/upload-url" className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V11H17C18.933 11 20.5 12.567 20.5 14.5C20.5 16.433 18.933 18 17 18H16C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H17C20.0376 20 22.5 17.5376 22.5 14.5C22.5 11.7793 20.5245 9.51997 17.9296 9.07824C17.4862 6.20213 15.0003 4 12 4C8.99974 4 6.51381 6.20213 6.07036 9.07824C3.47551 9.51997 1.5 11.7793 1.5 14.5C1.5 17.5376 3.96243 20 7 20H8C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18H7C5.067 18 3.5 16.433 3.5 14.5C3.5 12.567 5.067 11 7 11H8V10ZM15.7071 13.2929L12.7071 10.2929C12.3166 9.90237 11.6834 9.90237 11.2929 10.2929L8.29289 13.2929C7.90237 13.6834 7.90237 14.3166 8.29289 14.7071C8.68342 15.0976 9.31658 15.0976 9.70711 14.7071L11 13.4142V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13.4142L14.2929 14.7071C14.6834 15.0976 15.3166 15.0976 15.7071 14.7071C16.0976 14.3166 16.0976 13.6834 15.7071 13.2929Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Upload Url</span>
                                </a>
                            </li>
                            <li>
                                <a href="/python/download" className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>    
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Download</span>
                                </a>
                            </li>
                        </ul>
                    </li>       
                </ul>
            </div>
        </aside>
        </>
    );
}
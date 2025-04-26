"use client";

import DocsHeader from "./header";

export default function Intro() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <DocsHeader />
            
            <div className="flex-1 pt-2 sm:pt-10 min-h-screen bg-gray-800 py-10 px-6 sm:px-14 sm:ml-64">
                <div className="max-w-3xl mx-auto text-center py-10 sm:py-20">
                    <a href="https://avainintek.com" className="bg-purple-500 text-xs text-white px-3 py-1 rounded-full">AvianInTek</a>
                    <h1 className="text-2xl sm:text-4xl font-bold mt-4">Welcome to PicDB Docs</h1>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">PicDB is your ultimate solution for secure and efficient image storage and retrieval.</p>
                </div>
                
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button onClick={() => window.open('/', '_self')} className="bg-gray-700 px-4 sm:px-6 py-4 rounded-lg text-left text-white font-semibold flex items-center">
                        <span className="mr-2">🔒</span> Getting Started
                    </button>
                    <button onClick={() => window.open('/upload', '_self')} className="bg-gray-700 px-4 sm:px-6 py-4 rounded-lg text-left text-white font-semibold flex items-center">
                        <span className="mr-2">📜</span> API Reference
                    </button>
                    <button onClick={() => window.open('/python/installation', '_self')} className="bg-gray-700 px-4 sm:px-6 py-4 rounded-lg text-left text-white font-semibold flex items-center">
                        <span className="mr-2">⚡</span> Python Package
                    </button>
                    <button onClick={() => window.open('mailto:support@avianintek.com', '_blank')} className="bg-gray-700 px-4 sm:px-6 py-4 rounded-lg text-left text-white font-semibold flex items-center">
                        <span className="mr-2">❓</span> Help
                    </button>
                </div>
                
                <div className="max-w-4xl mx-auto mt-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-center">Why PicDB?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-gray-300">
                        <div>
                            <h3 className="font-semibold">🛡️ Secure Storage</h3>
                            <p className="text-sm">Your images are encrypted and securely stored.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">⚡ Fast Retrieval</h3>
                            <p className="text-sm">Quick access to your images anytime, anywhere.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">📂 Free of cost</h3>
                            <p className="text-sm">Store your image safe and for free.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">☁️ Cloud Sync</h3>
                            <p className="text-sm">Sync and access images across multiple devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

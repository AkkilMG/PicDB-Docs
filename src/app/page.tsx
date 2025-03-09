"use client";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex">
    {/* Left Sidebar */}
    <div className="w-64 p-4 space-y-2">
      <div className="font-bold text-lg">Get Started</div>
      <a href="#" className="block hover:text-blue-400">Overview</a>
      <a href="#" className="block hover:text-blue-400">Authentication</a>
      <a href="#" className="block hover:text-blue-400">Models</a>

      <div className="font-bold text-lg mt-4">Voice API</div>
      <details>
        <summary className="hover:text-blue-400 cursor-pointer">
          Audio Processing
        </summary>
        <a href="#" className="block pl-4 hover:text-blue-400">
          Speech Recognition
        </a>
        <details>
          <summary className="hover:text-blue-400 cursor-pointer pl-4">
            Speech Recognition
          </summary>
          <a href="#" className="block pl-8 hover:text-blue-400">
            Real-time Streaming
          </a>
          <a href="#" className="block pl-8 hover:text-blue-400 text-orange-400 bg-gray-800 rounded">
            Batch Processing
          </a>
          <a href="#" className="block pl-8 hover:text-blue-400">
            Speaker Detection
          </a>
          <a href="#" className="block pl-8 hover:text-blue-400">
            Language Support
          </a>
          <a href="#" className="block pl-8 hover:text-blue-400">
            Audio Enhancement
          </a>
        </details>
      </details>

      <details>
        <summary className="hover:text-blue-400 cursor-pointer">
          Voice Synthesis
        </summary>
        </details>

      <div className="font-bold text-lg mt-4">Agent API</div>
      <a href="#" className="block hover:text-blue-400">Create Agents</a>
      <a href="#" className="block hover:text-blue-400">Create Sub-agents</a>
      <a href="#" className="block hover:text-blue-400">Configure Skills</a>
      <a href="#" className="block hover:text-blue-400">Manage States</a>
      <a href="#" className="block hover:text-blue-400">Analytics</a>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-8 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Batch Processing</h1>
      <p className="text-gray-400 mb-4">
        Process multiple audio files efficiently with our batch transcription API.
        Perfect for analyzing recorded calls, meetings, or any archived audio content.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">End points</h2>
      <p className="text-gray-400 mb-4">
        Update an existing batch processing job's configuration or status.
      </p>

      {/* Endpoint Example */}
      <div className="bg-gray-700 p-2 rounded text-sm flex items-center justify-between">
        <span className="font-mono">
          <span className="text-green-500">PATCH</span> /v1/speech/batch/
          <span className="text-orange-400">{'{batchId}'}</span>
        </span>
        <button className="hover:bg-gray-600 rounded p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108a2.25 2.25 0 0 0-2.25-2.25H6.108a2.25 2.25 0 0 0-2.25 2.25v1.392m6 3.75V9.792a2.25 2.25 0 0 0 2.25-2.25h1.392a2.25 2.25 0 0 0 2.25 2.25v1.392m-3 6V16.108a2.25 2.25 0 0 0-2.25-2.25H15.108a2.25 2.25 0 0 0-2.25 2.25v1.392m-6-3.75V11.792a2.25 2.25 0 0 0 2.25-2.25h1.392a2.25 2.25 0 0 0 2.25 2.25v1.392"
            />
          </svg>
        </button>
      </div>

      {/* Request Body */}
      <h2 className="text-xl font-bold mt-6 mb-2">Request Body</h2>
      <div className="flex space-x-2 mb-2">
        <button className="bg-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none">
          json
        </button>
        <button className="rounded-md px-4 py-2 text-sm hover:bg-gray-600 focus:outline-none">
          cURL
        </button>
        <button className="ml-auto text-green-400 text-sm">Lear</button>
      </div>

      {/* Code Block */}
      <div className="bg-gray-900 rounded-md p-3 relative">
        <div className="flex justify-end space-x-2 absolute top-1 right-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6.108a2.25 2.25 0 0 0-2.25-2.25H6.108a2.25 2.25 0 0 0-2.25 2.25v1.392m6 3.75V9.792a2.25 2.25 0 0 0 2.25-2.25h1.392a2.25 2.25 0 0 0 2.25 2.25v1.392m-3 6V16.108a2.25 2.25 0 0 0-2.25-2.25H15.108a2.25 2.25 0 0 0-2.25 2.25v1.392m-6-3.75V11.792a2.25 2.25 0 0 0 2.25-2.25h1.392a2.25 2.25 0 0 0 2.25 2.25v1.392"
              />
            </svg>
          </button>
        </div>
        <pre className="text-sm">
          <code className="language-json">
            {`{
"config": {
  "enhanced_model": true,
  "speaker_detection": true,
  "language": "en-US"
},
"webhook_url": "https://webhook.domain.com",
"priority": "high",
"status": "paused"
}`}
          </code>
        </pre>
      </div>

      {/* Path Parameters */}
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
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">batchID</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">string</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">yes</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-300">
                  Unique identifier of the batch job
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

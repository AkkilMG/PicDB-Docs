"use client";

import PythonMainTemplate from "@/components/python/main";
import { env } from "@/config/env.config";
import { APIMainTemplateProps } from "@/models/main";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function PythonMain() {
    const pathname = usePathname();
    const path = pathname?.split('/').pop();
    const [data, setData] = useState<APIMainTemplateProps>({} as APIMainTemplateProps);
    const pythonData: APIMainTemplateProps[] = [
        {
          path: "/installation",
          heading: "Installation",
          description: "Install the py-picdb package using pip.",
          code: "pip install py-picdb",
          responseBody: "Successfully installed py-picdb",
        },
        {
          path: "/upload-local",
          heading: "Upload from Local Path",
          description: "Upload an image file from a local path to the py-picdb server.",
          code: `from picdb import upload_file

response = upload_file("./tests/test.png")
print("Upload response:", response)
`,
          responseBody: `{"status": "success", "url": "${env.API_URL}/{image_id}"}`,
        },
        {
          path: "/upload-url",
          heading: "Upload from Download Link",
          description: "Upload an image using a direct download link.",
          code: `from picdb import upload_link

response = upload_link("https://example.com/image.png")
print("Upload response:", response)
`,
          responseBody: `{"status": "success", "url": "${env.API_URL}/{image_id}"}`,
        },
        {
          path: "/download",
          heading: "Download Image",
          description: "Download an image from py-picdb using its URL.",
          code: `from picdb import download_file_id

download_file_id("{image_id}", "./downloads")
print("Download completed!")
`,
          responseBody: `{"status": "success", "message": "Image downloaded successfully"}`,
        },
    ];
      
    
    useEffect(() => {
        if (path?.includes("installation")) {
            setData(pythonData[0]);
        } else if (path?.includes("upload-local")) {
            setData(pythonData[1]);
        } else if (path?.includes("upload-url")) {
            setData(pythonData[2]);
        } else if (path?.includes("download")) {
            setData(pythonData[3]);
        }
    }, [path]);

    return (
        <PythonMainTemplate path={data.path} heading={data.heading} 
            description={data.description} code={data.code} responseBody={data.responseBody}  />
    );
}
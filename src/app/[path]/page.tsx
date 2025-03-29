"use client";

import MainTemplate from "@/components/api/main";
import { MainTemplateProps } from "@/models/main";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Home() {
    const pathname = usePathname();
    const path = pathname?.split('/').pop();
    const [data, setData] = useState<MainTemplateProps>({} as MainTemplateProps);

    const allData: MainTemplateProps[] = [
        {
            path: "/upload",
            heading: "Upload Image",
            description: "Uploads an image file to the server.",
            endDescription: "Returns the URL for viewing and downloading the uploaded image.",
            request: {
                type: "POST",
                url: "/upload",
                requestBody: {
                    json: `{ "file": "image data" }`,
                    curl: "curl -X POST -F 'file=@path/to/image.jpg' https://picdb.avianintek.workers.dev/upload"
                }
            },
            responseBody: `{ 
    "success": true, 
    "message": "File uploaded successfully", 
    "vurl": "https://picdb.avianintek.workers.dev/view/IMAGE_ID", 
    "durl": "https://picdb.avianintek.workers.dev/download/IMAGE_ID", 
    "id": "IMAGE_ID" 
}`,
        }, {
            path: "/details/{image_id}",
            heading: "Retrieve Image Details",
            description: "Fetch details for a specific image by ID.",
            endDescription: "Returns file size and upload timestamp.",
            request: {
                type: "GET",
                url: "/details/{image_id}",
                requestBody: {
                    json: "",
                    curl: "curl -X GET https://picdb.avianintek.workers.dev/details/IMAGE_ID"
                }
            },
            pathParameters: [
                {
                    parameter: "image_id",
                    type: "string",
                    required: "true",
                    description: "The ID of the image."
                }
            ],
            responseBody: `{ 
    "success": true,
    "filename": "IMAGE_ID.png", 
    "mime": "image/png" 
}`
        }, {
            path: "/view/{image_id}",
            heading: "View Image",
            description: "Fetches the image for viewing by ID.",
            endDescription: "Returns the image file.",
            request: {
                type: "GET",
                url: "/view/{image_id}",
                requestBody: {
                    json: "",
                    curl: "curl -X GET https://picdb.avianintek.workers.dev/view/IMAGE_ID"
                }
            },
            pathParameters: [
                {
                    parameter: "image_id",
                    type: "string",
                    required: "true",
                    description: "The ID of the image."
                }
            ],
            responseBody: "Image file content."
        },
        {
            path: "/download/{image_id}",
            heading: "Download Image",
            description: "Downloads the image file by ID.",
            endDescription: "Returns the image file for download.",
            request: {
                type: "GET",
                url: "/download/{image_id}",
                requestBody: {
                    json: "",
                    curl: "curl -X GET https://picdb.avianintek.workers.dev/download/IMAGE_ID"
                }
            },
            pathParameters: [
                {
                    parameter: "image_id",
                    type: "string",
                    required: "true",
                    description: "The ID of the image."
                }
            ],
            responseBody: "Image file content."
        },
    ];

    
    useEffect(() => {
        if (path?.includes("upload")) {
            setData(allData[0]);
        } else if (path?.includes("detail")) {
            setData(allData[1]);
        } else if (path?.includes("view")) {
            setData(allData[2]);
        } else if (path?.includes("download")) {
            setData(allData[3]);
        }
    }, [path]);
    return (
        <>
            {data && data.path ? (
                <MainTemplate path={data.path} heading={data.heading} description={data.description} 
                endDescription={data.endDescription} request={data.request} responseBody={data.responseBody} />
            ) : (
                <></>
            )}
        </>
    );
}

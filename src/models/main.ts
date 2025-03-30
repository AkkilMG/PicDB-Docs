
export interface MainTemplateProps {
    path: string;
    heading: string;
    description: string;
    endDescription: string;
    request: {
        type: string;
        url: string;
        requestBody: {
            json: string;
            curl: string;
        }
    };
    pathParameters?: [{
        parameter: string;
        type: string;
        required: string;
        description: string;
    }];
    responseBody: string;
}



export interface APIMainTemplateProps {
    path: string;
    heading: string;
    description: string;
    code: string;
    responseBody: string;
}
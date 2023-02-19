import axios from "axios";
import { z } from "zod";

export type FetcherProperties<Request, Response> = {
    baseUrl: string;
    path: string;
    requestSchema: z.ZodType<Request>;
    responseSchema: z.ZodType<Response>;
}

export type FetcherResult<Response> = z.SafeParseReturnType<Response, Response>

export const fetcher = <Request, Response>({
    baseUrl,
    path,
    requestSchema,
    responseSchema,
}: FetcherProperties<Request, Response>): (data: Request) => Promise<FetcherResult<Response>> => {
    return (requestData: Request) => {
        requestSchema.parse(requestData);

        const apiCall = async () => {
            const response = await axios({
                baseURL: baseUrl,
                method: "GET",
                url: path,
                params: requestData,
            });

            return responseSchema.safeParse(response.data);
        };

        return apiCall();
    };
};

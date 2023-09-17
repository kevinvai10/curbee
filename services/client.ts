import { HEADERS, GET } from './constants';

interface ClientRequestInit extends RequestInit {
    isSSR?: boolean;
    params?: Record<string, string>;
    paramsArray?: string[];
}

export const client = (
    endpoint: string,
    {
        body,
        isSSR = false,
        params = {},
        paramsArray = [],
        ...customConfig
    }: ClientRequestInit = {}
) => {
    const config: RequestInit = {
        credentials: 'include',
        method: GET,
        ...customConfig,
        headers: {
        ...HEADERS,
        ...customConfig.headers,
        },
    };

    if (body) {
        config.body = body;
    }

    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);

    return fetch(url, config)
        .then(async (response) => {
        const data: any = response.status !== 204 ? await response.json() : {};
        if (response.ok) {
            return Promise.resolve(data);
        } else if (response.status === 422 || response.status === 428) {
            return Promise.reject({
            ...data,
            statusCode: response.status,
            message: response.statusText,
            });
        } else {
            // handle error
        }
        })
        .catch((error: Error) => {
            /**
             * we still don't know how the api will
             * handle errors so will return error
             * for now
             */
            return Promise.reject<Error>(error);
        });
};

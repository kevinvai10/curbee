import Cookies from 'universal-cookie';
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
    const cookies = new Cookies();
    const authorizationToken = cookies.get('Authorization');

    const config: RequestInit = {
        method: GET,
        ...customConfig,
        headers: {
            ...HEADERS,
            ...customConfig.headers,
            // we need to do this since the BE won't grab the encoded value
            'Authorization': `Bearer ${authorizationToken}`
        },
        // credentials: 'include', TODO: replace when updating BE
    };

    if (body) {
        config.body = body;
    }

    return fetch(endpoint, config)
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
            return Promise.reject<Error>(error);
        });
};

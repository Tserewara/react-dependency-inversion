import HttpClient from "./HttpClient";

export default class FetchHttpClient implements HttpClient {
    async get (url: string): Promise<any> {
        const response = await fetch(url);
        return await response.json();
    }
}
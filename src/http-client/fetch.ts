import { Storage } from 'src/storage';

export class HttpClientImplement {
  private baseURL: string;
  private storage: Storage;

  constructor(baseURL: string, storage: Storage) {
    this.baseURL = baseURL;
    this.storage = storage;
  }

  async fetch(endPoint: string, options: RequestInit = {}): Promise<Response> {
    const response = await window.fetch(this.baseURL + endPoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.storage.get(),
        ...options.headers,
      },
    });

    this.interceptor(response);

    if (response.ok) {
      return response;
    } else {
      throw response;
    }
  }

  private interceptor(response: Response): void {
    console.log('Response Status:', response.status);

    if (response.status === 401) {
      console.log('Token expired. Refreshing token...');
      this.refreshToken();
    }

    if (!response.ok) {
      console.error('Request failed:', response.statusText);
    }
  }

  private async refreshToken(): Promise<void> {
    try {
      const newToken = await this.fetchNewToken();
      this.storage.set('token', newToken);
      console.log('Token refreshed successfully.');
    } catch (error) {
      console.error('Token refresh failed');
    }
  }

  private async fetchNewToken(): Promise<string> {
    return Promise.resolve('newAccessToken');
  }
}

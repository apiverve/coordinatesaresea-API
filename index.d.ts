declare module '@apiverve/coordinatesaresea' {
  export interface coordinatesareseaOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface coordinatesareseaResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class coordinatesareseaWrapper {
    constructor(options: coordinatesareseaOptions);

    execute(callback: (error: any, data: coordinatesareseaResponse | null) => void): Promise<coordinatesareseaResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: coordinatesareseaResponse | null) => void): Promise<coordinatesareseaResponse>;
    execute(query?: Record<string, any>): Promise<coordinatesareseaResponse>;
  }
}

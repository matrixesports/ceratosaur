export interface CeramicConfig {
	url: string;
}

export interface Ceramic {
	getStream: (id: string) => Promise<any>;
}
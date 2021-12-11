import { Ceramic, CeramicConfig } from "../types/mod.ts";
import { getStream } from "./stream.ts";

export function ceramic(config: CeramicConfig): Ceramic {
	return {
		getStream: (id: string) => { return getStream(config.url + "/api/v0/streams", id) },
	}
}
import { State } from "./state.ts";

export interface Stream {
	streamId: string;
	state: State;
}

export interface Stream {
	streamId: string;
	state: StreamState;
}

export interface StreamState {
	anchorProof?: AnchorProof;
	anchorScheduledFor?: number;
	anchorStatus: AnchorStatus;
	content: any;
	doctype: string;
	log: any;
	metadata: StreamMetadata;
	next: StreamNext;
	signature: number;
	type: number;
}

export interface AnchorProof {
	blockNumber: number;
	blockTimestamp: number;
	chainId: string;
	root: any;
	txHash: any;
}

export interface StreamMetadata {
	controllers: Array<string>;
	family?: string;
	forbidControllerChange?: boolean;
	schema?: string;
	tags?: Array<string>;
}

export interface StreamNext {
	content?: any;
	controllers?: Array<string>;
	metadata?: StreamMetadata;
}

export enum AnchorStatus {
	NOT_REQUESTED,
	PENDING,
	PROCESSING,
	ANCHORED,
	FAILED,
}

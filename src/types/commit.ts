export interface CommitHeader {
	controllers: string[];
	family?: string;
	schema?: string;
	tags?: string[];
}

export interface StreamCommits {
	streamId: string;
	commits: Array<any>;
}

export interface GenesisCommit {
	data?: any;
}

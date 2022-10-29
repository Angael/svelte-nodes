export interface INode {
	key: string;
	position: [number, number];
	connectors: IConnector[];
	data?: any;
}

export interface IConnector {
	key: string;
	type: 'in' | 'out';
}

export interface IConnection {
	in: string;
	out: string;
}

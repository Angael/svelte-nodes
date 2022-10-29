<script lang="ts">
	import { nanoid } from 'nanoid';

	import type { IConnection, IConnector, INode } from './editorTypes';
	import Line from './line/Line.svelte';
	import Node from './node/Node.svelte';

	let transform: [number, number] = [0, 0];
	let nodes: INode[] = [
		{
			key: nanoid(),
			data: 'aaaa',
			position: [50, 100],
			connectors: [
				{
					key: nanoid(),
					type: 'out'
				}
			]
		},
		{
			key: nanoid(),
			data: 'other div',
			position: [400, 200],
			connectors: [
				{
					key: nanoid(),
					type: 'in'
				},
				{
					key: nanoid(),
					type: 'in'
				}
			]
		}
	];

	let connections: IConnection[] = [
		{ in: nodes[0].connectors[0].key, out: nodes[1].connectors[0].key }
	];
</script>

<!-- <pre>{JSON.stringify(nodes, (k, v) => (k !== 'ref' ? v : !!v), 2)}</pre> -->

<section data-tag="editor">
	<div class="transform" style:transform="translate({transform[0]}px, {transform[1]}px)">
		{#each nodes as nd (nd.key)}
			<Node nodeData={nd} />
		{/each}
		{#each connections as connection}
			<Line {connection} />
		{/each}
	</div>
</section>

<style>
	pre {
		height: 400px;
		overflow-y: scroll;
		border: 1px solid black;
		padding: 0 10px;
		font-size: 12px;
	}

	section {
		position: relative;
		border: solid 1px #bb4444;
		width: 100%;
		height: 700px;
	}

	.transform {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>

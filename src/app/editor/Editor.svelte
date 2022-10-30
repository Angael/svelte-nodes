<script lang="ts">
	import { nanoid } from 'nanoid';
	import { onMount } from 'svelte';

	import type { IConnection, INode } from './editorTypes';
	import { isTouchDevice } from './isTouchDevice';
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

	let _isTouchDevice = false;
	onMount(() => {
		_isTouchDevice = isTouchDevice();
	});
</script>

{#if _isTouchDevice}
	<p class="err">Editor doesn't support touch devices at this moment</p>
{/if}
<section class="editor" data-tag="editor">
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

	.editor {
		position: relative;
		width: 100%;
		height: 700px;
		border: 1px solid var(--color-grey-300);
		background-color: white;
		overflow: hidden;
	}

	.transform {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.err {
		color: var(--color-red-500);
		border: 1px solid var(--color-red-300);
		padding: var(--size-2);
		margin: var(--size-2);
	}
</style>

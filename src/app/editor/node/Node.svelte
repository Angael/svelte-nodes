<script lang="ts">
	import { refsStore } from 'src/stores/refs';
	import { onMount } from 'svelte';
	import type { INode } from '../editorTypes';
	import Connector from './Connector.svelte';

	export let nodeData: INode;
	$: ({ data, position, connectors } = nodeData);

	let _position = nodeData.position;
	let moving = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e: MouseEvent) {
		if (moving) {
			let [a1, a2] = _position;
			_position = [a1 + e.movementX, a2 + e.movementY];
			refsStore.update((_refs) => ({ ..._refs, [nodeData.key]: nodeRef }));
		}
	}

	function onMouseUp() {
		moving = false;
	}
	$: console.log(moving);

	$: inConnectors = connectors.filter((c) => c.type === 'in');
	$: outConnectors = connectors.filter((c) => c.type === 'out');

	let nodeRef: HTMLElement;
	onMount(() => {
		refsStore.update((_refs) => ({ ..._refs, [nodeData.key]: nodeRef }));
	});
</script>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<article bind:this={nodeRef} style:left="{_position[0]}px" style:top="{_position[1]}px">
	<header on:mousedown={onMouseDown}>Node</header>
	<div>
		<label>Data: <input type="text" value={data} /></label>
	</div>

	<div class="connectors in">
		{#each inConnectors as connector (connector.key)}
			<Connector {connector} />
		{/each}
	</div>

	<div class="connectors out">
		{#each outConnectors as connector (connector.key)}
			<Connector {connector} />
		{/each}
	</div>
</article>

<style>
	article {
		position: absolute;
		border: solid 1px black;
		min-width: 150px;
		min-height: 200px;
		padding: 8px;

		background-color: rgba(238, 238, 238, 0.516);
	}

	header {
		width: 100%;
		padding: 4px;
		margin: -8px -8px 0;
		user-select: none;
		cursor: move;
	}

	label {
		display: block;
	}

	.connectors {
		position: absolute;
		top: 20px;

		padding: 2px;
		border: solid 1px #ccc;
		border-radius: 50%;

		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.connectors.in {
		left: 0;
	}

	.connectors.out {
		right: 0;
	}
</style>

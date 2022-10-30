<script lang="ts">
	import { refsStore } from 'src/stores/refs';
	import { onMount } from 'svelte';
	import type { IConnector } from '../editorTypes';

	export let connector: IConnector;
	let ref: HTMLElement;
	onMount(() => {
		refsStore.update((_refs) => ({ ..._refs, [connector.key]: ref }));
	});
</script>

<div class="connector" bind:this={ref} />

<style>
	.connector {
		width: 16px;
		height: 16px;
		background: red;
		border-radius: 50%;
	}
</style>

<script lang="ts">
	import { refsStore } from 'src/stores/refs';
	import { onDestroy } from 'svelte';
	import type { IConnection } from '../editorTypes';
	import { getOffsetFromEditor } from './getOffsetFromEditor';

	export let connection: IConnection;
	let start: [any, any] = [0, 0];
	let end: [any, any] = [10, 10];
	$: middleFromLeft = (start[0] + end[0]) / 2;

	let unSubscribe = refsStore.subscribe((refs) => {
		const a = refs[connection.in];
		const b = refs[connection.out];

		if (a) {
			start = getOffsetFromEditor(a);
		}
		if (b) {
			end = getOffsetFromEditor(b);
		}
	});
	onDestroy(unSubscribe);
</script>

<svg>
	<path
		d="M {start[0]} {start[1]} C {middleFromLeft} {start[1]} {middleFromLeft} {end[1]} {end[0]} {end[1]}"
		stroke="blue"
		stroke-width="3"
		fill="none"
	/>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
	}
</style>

<script lang="ts">
	import Editor from 'src/editor/Editor.svelte';

	let w: string = '100';
	let h: string = '350';
	let q: string = '150';
	let q2: string = '-300';
</script>

<h1>Editor</h1>
<label>w: <input type="number" bind:value={w} /></label>
<label>h: <input type="number" bind:value={h} /></label>

<Editor />

<style>
	svg {
		width: 500px;
		height: 500px;
	}
</style>

<script lang="ts">
	import Editor from 'src/app/editor/Editor.svelte';

	let w: string = '100';
	let h: string = '350';
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

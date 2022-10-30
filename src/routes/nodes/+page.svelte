<script lang="ts">
	import Editor from 'src/app/editor/Editor.svelte';

	let w: string = '100';
	let h: string = '350';
</script>

<div class="container">
	<h1>Nodes editor</h1>
	<p>Here you can demo how the app works</p>
</div>

<Editor />

<style>
	.container {
		margin: var(--size-4) auto;
		padding: 0 var(--size-3);
		max-width: var(--width-md);
	}

	svg {
		width: 500px;
		height: 500px;
	}
</style>

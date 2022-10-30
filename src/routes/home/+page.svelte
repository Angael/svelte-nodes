<script lang="ts">
	export const ssr = false;
</script>

<div class="container">
	<h1>About this project</h1>

	<p class="subtitle">(It's a test project)</p>

	<p>
		SNS is a Svelte Node System, heavily inspired by <q>rete.js</q>. It will allow to create,
		connect, edit nodes, then export or import them easily.
	</p>
	<p>This project has two goals:</p>
	<ul>
		<li>To teach me sveltekit</li>
		<li>To try and make a node based system</li>
	</ul>
	<p>Who knows, maybe some day I will be able to monetize this in another plan for a website?</p>
</div>

<style>
	.container {
		margin: auto;
		max-width: var(--width-md);
		padding: var(--size-3);
	}

	h1 {
		font-size: var(--scale-5);
		text-align: center;
		margin: var(--size-8) 0 0;
	}

	.subtitle {
		font-size: var(--scale-0);
		text-align: center;
		color: var(--color-green-500);
		margin-top: calc(0px - var(--size-1));
	}

	/*  Change dot color */
	ul {
		list-style: none; /* Remove default bullets */
	}

	ul li::before {
		content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
		color: var(--color-green-500); /* Change the color */
		font-weight: bold; /* If you want it to be bold */
		display: inline-block; /* Needed to add space between the bullet and the text */
		width: 1em; /* Also needed for space (tweak if needed) */
		margin-left: -1em; /* Also needed for space (tweak if needed) */
	}
</style>

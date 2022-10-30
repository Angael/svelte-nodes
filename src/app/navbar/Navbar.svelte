<script lang="ts">
	import Link from '../link/Link.svelte';
</script>

<nav>
	<div class="max-width">
		<div class="logo">TODO: Logo</div>
		<div class="links">
			<Link href="/home">SNS</Link>
			<Link href="/nodes">Editor</Link>
		</div>
	</div>
</nav>

<div class="marginblock" />

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: var(--size-full);
		height: var(--size-10);

		font-size: var(--scale-1);

		border-bottom: solid 1px var(--color-grey-500);
		background-color: var(--color-grey-50);
		box-shadow: var(--shadow-sm);
	}

	.max-width {
		margin: auto;
		max-width: var(--width-md);
		padding: 0 var(--size-3);
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: var(--scale-2);
	}

	.links {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--size-2);
	}

	.marginblock {
		content: '';
		height: var(--size-10);
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a data-sveltekit-prefetch {href} class:active={$page.url.pathname === href}><slot /></a>

<style>
	a {
		color: var(--color-green-500);
	}

	a:hover {
		color: var(--color-green-700);
	}

	a.active {
		color: var(--color-grey-900);
		text-decoration: none;
		cursor: default;
	}
</style>

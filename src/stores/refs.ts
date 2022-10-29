import { writable } from 'svelte/store';

interface refs {
	[key: string]: HTMLElement;
}

export const refsStore = writable<refs>({});

<script lang="ts">
	import Map from '$lib/map.svelte';
	import { beforeUpdate, tick } from 'svelte';
	import Sidebar from '../lib/sidebar.svelte';

	let visible: boolean = false;

	async function exposeSidebar() {
		visible = false;
		setTimeout(() => (visible = true));
	}
</script>

<Sidebar bind:visible>
	<Map/>
	<button class="btn-primary btn" on:click={exposeSidebar}>Toggle Sidebar</button>
</Sidebar>

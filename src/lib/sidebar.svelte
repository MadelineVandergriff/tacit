<script lang="ts">
	import { assets } from "$app/paths";

	let items = ['first', 'second', 'third'];
</script>

<div class="static top-0 left-0 flex flex-col">
	{#each items as item}
	<div class="flex w-50 h-40">
		<div class="w-20 h-20">
			<img src="/cat.jpeg" alt="todo" 
			class="w-full h-full rounded-3xl border-2 border-b-4 border-r-4 border-black-500"
			>
		</div>
	</div>
	{/each}
</div>

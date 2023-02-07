<script lang="ts">
	import { afterUpdate, tick } from 'svelte';

	export let visible: boolean = false;
	let groups = ['Family', 'Business', 'Protest'];

	afterUpdate(() => {});
</script>

<div class="drawer">
	<input id="sidebar-toggle" type="checkbox" class="drawer-toggle" checked={visible} />
	<div class="drawer-content">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="sidebar-toggle" class="drawer-overlay" />
		<ul class="menu rounded-box w-80 bg-base-100 p-2">
			{#each groups as group}
				<li>
					<div class="flex h-20 w-full align-middle">
						<div class="placeholder avatar">
							<div class="w-12 rounded-full bg-neutral-focus text-neutral-content">
								<span class="text-3xl">{group.charAt(0)}</span>
							</div>
						</div>
						<div class="flex flex-col justify-start align-middle">
							<span class="text-2xl font-semibold text-secondary">{group}</span>
							<span class="text-xs text-base-content">3 Members</span>
						</div>
					</div>
				</li>
				<div class="divider my-1" />
			{/each}
		</ul>
	</div>
</div>

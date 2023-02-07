<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	mapboxgl.accessToken = '';

	onMount(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/madeline-vandergriff/cldtpw4rq000001lqivprn5ou',
			center: [16.37, 48.2],
			zoom: 12
		});
	});
</script>

<div id="map" class="absolute w-full h-full"></div>

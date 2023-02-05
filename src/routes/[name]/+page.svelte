<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Welcome</h1>
<h2>Hello {data.name}</h2>

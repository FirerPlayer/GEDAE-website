<script lang="ts">
	import { page } from '$app/stores';
	let title: string;
	let errorMenssage: string;
	let status: number;
	if ($page.error) {
		status = $page.status;
		errorMenssage = $page.error.message;
		title = `${status}`;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-row flex-wrap items-center justify-center h-[50vh] ">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-24 h-24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
		/>
	</svg>
	<h1 class=" text-4xl text-center">{status}<br />{errorMenssage}</h1>
</div>

<script lang="ts">
	export let menuItems = {
		name: 'Exemplo de itens',
		items: [
			{
				name: 'Item 1',
				link: '#'
			},
			{
				name: 'Item 2',
				link: '#'
			}
		]
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-missing-attribute -->
<li tabindex="0" class="hover:text-primary hover:shadow-inner876y6e4S h-[90px]">
	<span class="">{menuItems.name}</span>
	<ul class="bg-base-100 sm:w-52 text-base-content w-full drop-shadow-md border-base-300">
		{#each menuItems.items as item}
			<li class="hover-bordered "><a href={item.link}>{item.name}</a></li>
		{/each}
	</ul>
</li>

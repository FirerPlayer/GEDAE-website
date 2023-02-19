<script lang="ts">
	import { Flask2 } from 'svelte-tabler';

	export let menuItems = {
		name: 'Exemplo de itens',
		items: [
			{
				name: 'Item 1',
				link: '#',
			},
			{
				name: 'Item 2',
				link: '#'
			}
		]
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li tabindex="0" class="hover:text-primary h-24 border-r-[1px] border-b-[1px]">
	<span class="">{menuItems.name}</span>
	<ul class="bg-base-100 sm:w-52 text-base-content w-full border-base-300">
		{#each menuItems.items as item}
			<li class="hover-bordered ">
				<a href={item.link}>
					<!-- <Flask2/> -->
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
</li>

<style>
	.glow:hover {
		--shadow-color: var(--p);
		box-shadow: inset 0px -1px 0.9px hsl(var(--shadow-color) / 0.11),
			inset 0px -2.3px 2.2px -1.2px hsl(var(--shadow-color) / 0.09),
			inset 0px -6.4px 6px -2.5px hsl(var(--shadow-color) / 0.07),
			inset 0px -17px 15.9px -3.7px hsl(var(--shadow-color) / 0.06);
	}
</style>

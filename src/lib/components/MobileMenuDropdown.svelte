<script lang="ts">
	import { Flask2 } from 'svelte-tabler';
	export const clickFocus = false;
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

<div class="collapse collapse-arrow transtiion-all transition-[2s]">
	<input type="checkbox" />
	<div class="collapse-title font-medium">
		{menuItems.name}
	</div>
	<div class="collapse-content">
		<ul class=" menu menu-vertical">
			{#each menuItems.items as item}
				<li><a href={item.link}>{item.name}</a></li>
			{/each}
		</ul>
	</div>
</div>

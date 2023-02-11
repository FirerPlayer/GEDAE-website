<script lang="ts">
	import '../app.css';
	import logo from '../lib/assets/logo.png';
	import DropdownMenuItem from '$lib/components/DropdownMenuItem.svelte';
	import MobileMenuDropdown from '$lib/components/MobileMenuDropdown.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { slide } from 'svelte/transition';
	export let title = 'My App';
	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
	const dropEstrutura = {
		name: 'Estrutura',
		items: [
			{
				name: 'Loboratórios',
				link: '#'
			},
			{
				name: 'Biblioteca',
				link: '#'
			},
			{
				name: 'Área de testes',
				link: '#'
			}
		]
	};
	const dropProjetos = {
		name: 'Pesquisa e Desenvolvimento',
		items: [
			{
				name: 'Projetos',
				link: '#'
			},
			{
				name: 'Cursos',
				link: '#'
			},
			{
				name: 'Publicações',
				link: '#'
			},
			{
				name: 'Eventos',
				link: '#'
			}
		]
	};

	const menuItems = [
		{
			name: 'Quem somos',
			link: '#'
		}
	];
	let logoHorvered: boolean = false;
	let spanText;
</script>

<svelte:head>
	<title>{title}</title>
	<script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar bg-base-200 border-b-2 border-base-300 p-0 min-h-fit">
			<div class="flex-none md:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="flex-1 justify-center md:justify-start">
				<div
					class="inline-flex md:h-24 bg-black"
					on:mouseenter={() => {
						logoHorvered = true;
					}}
					on:mouseleave={() => {
						logoHorvered = false;
					}}
				>
					<img src={logo} alt="" class="md:h-[98px] h-16 pt-1 pl-1 z-10" />
					<div
						class={`hidden md:${
							logoHorvered ? 'block' : 'hidden'
						} relative h-fit w-fit text-xl -left-[102px] text-white`}
					>
						<div class="bg-red-600 w-fit h-[33px] px-1">Grupo de</div>
						<div class="bg-red-600 w-fit h-8 px-1">Estudos e Desenvolvimento de</div>
						<div class="bg-red-600 w-fit h-[33px] px-1">Alternativas Energéticas</div>
					</div>
				</div>
			</div>
			<div class="flex-none hidden md:block">
				<ul class="menu menu-horizontal px-1 flex-none rounded-none">
					{#each menuItems as item}
						<li class="h-[90px] ">
							<a class="h-full hover:text-primary hover:shadow-inner" href={item.link}
								>{item.name}</a
							>
						</li>
					{/each}
					<DropdownMenuItem menuItems={dropEstrutura} />
					<DropdownMenuItem menuItems={dropProjetos} />
				</ul>

				<select class="select select-bordered" data-choose-theme>
					{#each themes as item}
						<option value={item}>{item}</option>
					{/each}
					<option value="gedae">gedae</option>
				</select>
			</div>
		</div>
		<slot />
		<Footer />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<!-- Mobile menu -->
		<ul class="menu p-2 w-80 bg-base-200">
			{#each menuItems as item}
				<li class="">
					<a class="h-full" href={item.link}>{item.name}</a>
				</li>
			{/each}
			<MobileMenuDropdown menuItems={dropEstrutura} />
			<MobileMenuDropdown menuItems={dropProjetos} />
		</ul>
	</div>
</div>

<style lang="postcss">
	.denis {
		position: static;
	}
</style>

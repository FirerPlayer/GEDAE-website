<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import logo from '../lib/assets/logo.png';
	import DropdownMenuItem from '$lib/components/DropdownMenuItem.svelte';
	import MobileMenuDropdown from '$lib/components/MobileMenuDropdown.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fly } from 'svelte/transition';
	import { elasticInOut, quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';
	export let title = `GEDAE | ${$page.route.id === '/' ? 'Home' : $page.route.id}`;
	const dropEstrutura = {
		name: 'Estrutura',
		items: [
			{
				name: 'Laboratórios',
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
			link: '/about'
		},
		{
			name: 'Equipe',
			link: '/team'
		}
	];
	let logoHorvered: boolean = false;
	let isMobile: boolean;
	if (browser) {
		isMobile = window.matchMedia('(max-width: 768px)').matches;
	}
	let isDropdownOpen: boolean = false;
	const customTransition = () => {
		return {
			css: () => {
				return `
        transform: height;
        `;
			},
			easing: quintOut,
			duration: 200
		};
	};
</script>

<svelte:head>
	<title>{title}</title>
	<script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>
</svelte:head>
<svelte:window
	on:resize={(ev) => {
		isMobile = window.matchMedia('(max-width: 768px)').matches;
	}}
/>

<!-- svelte-ignore a11y-missing-attribute -->
{#if isMobile}
	<div class="navbar bg-base-200 border-b-2 border-base-300 p-0 min-h-fit z-10">
		<div class="navbar-start">
			<a href="/"><img src={logo} alt="" class="h-16" /></a>
		</div>
		<div class="navbar-end">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="btn btn-square btn-ghost"
				on:click={() => {
					isDropdownOpen = !isDropdownOpen;
				}}
			>
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
			</div>
		</div>
	</div>

	{#if isDropdownOpen}
		<ul class="menu p-2 w-full bg-base-200 -z-10">
			{#each menuItems as item}
				<li class="">
					<a class="h-full" href={item.link}>{item.name}</a>
				</li>
			{/each}
			<MobileMenuDropdown menuItems={dropEstrutura} />
			<MobileMenuDropdown menuItems={dropProjetos} />
			<!-- <div class="bg-black self-center place-self-start"></div> -->
		</ul>
	{/if}
	<slot />
	<Footer />
{:else}
	<div class="flex flex-col  items-center min-w-full bg-base-300">
		<div class="max-w-[1440px] bg-base-200">
			<div class="navbar bg-base-200 p-0 min-h-fit">
				<div class="flex-1 justify-start">
					<div
						class="inline-flex md:h-24"
						on:mouseenter={() => {
							logoHorvered = true;
						}}
						on:mouseleave={() => {
							logoHorvered = false;
						}}
					>
						<a href="/"><img src={logo} alt="" class="h-24 pt-1 pl-1" /></a>
						{#if logoHorvered}
							<div
								class="h-fit w-fit text-xl text-white border-l-4 border-l-white"
								transition:fly={{ duration: 650, x: -102, y: 0, easing: quintOut }}
							>
								<div class="bg-red-600 w-fit h-8 px-1">Grupo de</div>
								<div class="bg-red-600 w-fit h-8 px-1">Estudos e Desenvolvimento de</div>
								<div class="bg-red-600 w-fit h-8 px-1">Alternativas Energéticas</div>
							</div>
						{/if}
					</div>
				</div>
				<div class="flex-none">
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
				</div>
			</div>
			<div class=" min-h-[400px]"><slot /></div>
			<Footer />
		</div>
	</div>
{/if}

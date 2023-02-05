<script lang="ts">
	import '../app.css';
	import logo from '../lib/assets/logo.png';
	import DropdownMenuItem from '$lib/components/DropdownMenuItem.svelte';
	import { flip } from 'svelte/animate';
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
</script>

<svelte:head>
	<title>{title}</title>
	<script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="navbar bg-base-200 border-b-2 border-base-300 p-0">
	<div class="flex-1">
		<img src={logo} alt="" class="btn btn-ghost w-32 h-24" />
	</div>

	<ul class="menu menu-horizontal px-1 flex-none">
		{#each menuItems as item}
			<li class="hover:text-primary-focus h-[90px]">
				<a class="h-full" href={item.link}>{item.name}</a>
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

<slot />

<!-- svelte-ignore a11y-missing-attribute -->
<footer class="footer p-10 bg-base-200 text-base-content">
	<div>
		<img src={logo} alt="GEDAE" />
		<p>
			Grupo de Estudos e Desenvolvimento de Alternativas Energéticas<br />
			Promovendo a sustentabilidade e a eficiência energética desde 1994
		</p>
	</div>
	<div>
		<span class="footer-title">Services</span>
		<a class="link link-hover">Branding</a>
		<a class="link link-hover">Design</a>
		<a class="link link-hover">Marketing</a>
		<a class="link link-hover">Advertisement</a>
	</div>
	<div>
		<span class="footer-title">O grupod</span>
		<a class="link link-hover">Quem somos</a>
		<a class="link link-hover">Contatos</a>
	</div>
	<div>
		<span class="footer-title">Legal</span>
		<a class="link link-hover">Terms of use</a>
		<a class="link link-hover">Privacy policy</a>
		<a class="link link-hover">Cookie policy</a>
	</div>
</footer>

<style lang="postcss">
</style>

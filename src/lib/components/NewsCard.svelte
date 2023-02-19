<script lang="ts">
	import { goto } from '$app/navigation';
	import g from '$lib/assets/g.png';
	import { Calendar } from 'svelte-tabler';
	export let news = {
		title: '',
		content: 'Conteudo da noticia',
		date: new Date(2023, 0, 25),
		image: '',
		link: ''
	};

	function formatMyDate(date: Date): string {
		const meses = [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro'
		];
		const day = date.getDate();
		const month = meses[date.getMonth()];
		const year = date.getFullYear();

		return `${day} ${month} ${year}`;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	on:keydown={(ev) => {
		goto('#');
	}}
	class="card card-compact max-w-xs md:w-[384px] max-h-64 md:max-h-80 shadow-xl md:hover:-translate-y-2 transition-transform duration-[.25s]  cursor-pointer"
	on:click={(ev) => {
		goto('#');
	}}
	tabindex="0"
>
	<figure class="bg-base-200 py-2">
		<img src={news.image ? news.image : g} alt="" class="md:w-full" />
	</figure>
	<div class="card-body bg-primary-content ">
		<h2 class="card-title">{news.title}</h2>
		<a href={news.link} class="link">{news.content}</a>
		<div class="card-actions flex-row justify-end">
			<Calendar />
			<div class="md:text-sm">{formatMyDate(news.date)}</div>
		</div>
	</div>
</div>

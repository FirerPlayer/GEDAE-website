<script lang="ts">
	// import { dataset_dev } from 'svelte/internal';

	import NewsCard from '$lib/components/NewsCard.svelte';

	const newsContent = [
		{ title: 'IX CBENS', content: 'Participação de membros do GEDAE no IX CBENS' },
		{ title: 'Energia limpa', content: 'Energia limpa e acessível para comunidades ribeirinhas' },
		{
			title: 'Projeto de energia solar',
			content:
				'Projeto de energia solar da UFPA leva dignidade a moradores da Ilha das Onças, em Barcarena'
		},
		{
			title: 'Investimento da Hydro',
			content:
				'Hydro irá investir cerca de R$ 1 milhão em pesquisa com UFPA para uso de painéis solares flutuantes em mina de bauxita'
		},
		{
			title: 'Tecnologia fotovoltaica',
			content:
				'Tecnologia fotovoltaica possibilita acesso à energia a comunidades ribeirinhas da Amazônia'
		},
		{
			title: 'GEDAE desenvolve projeto',
			content: 'GEDAE desenvolve projeto para beneficiamento do açaí a partir de energia solar'
		}
	];

	const exampleNews = newsContent.map((item, i) => {
		return {
			title: item.title,
			content: item.content,
			date: new Date(`02-${i + 1}-2023`),
			image: `https://picsum.photos/250/250?random=${i}`,
			link: ''
		};
	});
</script>

<div
	class="hero items-start md:items-end min-h-[400px] md:min-h-screen"
	style="background-image: url(https://gedae.ufpa.br/images/Imagens/Membros/equipe_gedae.png);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-right text-neutral-content justify-self-end">
		<div class="max-w-md">
			<h1 class="mb-0.5 md:mb-5 text-xl md:text-5xl font-bold">GEDAE</h1>
			<p class="mb-5 text-sm md:text-base">
				Desenvolvimento de tecnologias de baixo custo para atendimento de energia elétrica a
				pequenas e médias cargas, com o uso de energias renováveis.
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col items-center md:pt-4 shadow-inner-xl">
	<div class="divider" />
	<div class="text-lg md:text-4xl font-bold text-base-content">NOTÍCIAS</div>
	<div class="p-4 md:p-12 flex flex-wrap gap-8  justify-center">
		{#each exampleNews as news}
			<NewsCard {news} />
		{/each}
	</div>
	<button class="btn btn-sm md:btn-md mb-4 md:mb-8 mr-8 md:mr-20 self-end">MAIS NOTÍCIAS</button>
</div>

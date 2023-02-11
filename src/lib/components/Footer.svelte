<script lang="ts">
	import logo from '$lib/assets/logo.png';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<footer class="footer p-4 md:p-10 bg-base-200 text-base-content">
	<div>
		<img src={logo} alt="GEDAE" class="md:h-24 h-16" />
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
		<span class="footer-title">O grupo</span>
		<a class="link link-hover">Quem somos</a>
		<a class="link link-hover">Contatos</a>
	</div>
	<div>
		<span class="footer-title">Legal</span>
		<a class="link link-hover" href="https://portal.ufpa.br/">UFPA</a>
	</div>
</footer>

<style lang="postcss">
</style>

<script>
	import { Col, Container, Row } from 'sveltestrap';
  import Hola from '../components/Hola/index.svelte';

</script>

<style>
</style>

<svelte:head>
	<title>Bahlum</title>
</svelte:head>

<Container>
	<Row>
		<Col cols="12">
			<h1>Hi, I’m Gonzalo P. Vargas</h1>
			<h3 class="text-center">Full-Stack Web Developer</h3>
			<p><strong>Open your ... mind, soul and source.</strong></p>
      <Hola/>
		</Col>
	</Row>
</Container>

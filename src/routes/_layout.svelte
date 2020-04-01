<script>
	import Nav from '../components/Nav/index.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';

	export let segment;
</script>

<style src="../assets/scss/_global.scss">
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
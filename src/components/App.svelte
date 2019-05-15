<script>
    import { Router } from 'svelte-routes';
    import Nav from './Nav.svelte';
    import routes from '../routes';
</script>

<Nav />
<Router routes={routes} />

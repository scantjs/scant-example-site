<script>
    import { Link } from 'svelte-routes';
</script>

<style>
    nav {
        border-bottom: 1px solid #e3e3e3;
        font-weight: 300;
        padding: 0 1em;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }
    li {
        display: block;
        float: right;
    }
    li:hover {
        box-shadow: inset 0 -0.75em 0 -10px red;
    }
    :global(.nav-item a) {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
    .site-title {
        margin: 0;
        padding: 0.5%;
        float: left;
    }
</style>

<nav class="navbar">
    <h1 class="site-title">Sylph Example Site</h1>
    <ul>
        <li class="nav-item"><Link to="/" name="Home" /></li>
        <li class="nav-item"><Link to="/blog" name="Blog" /></li>
        <li class="nav-item"><Link to="/not-a-real-page" name="404 Example" /></li>
    </ul>
</nav>

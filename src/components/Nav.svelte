<script>
    import { Link } from 'svelte-routes';
</script>

<style>
    h1 {
        font-size: 1.875em;
    }
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
    :global(.navbar a) {
        text-decoration: none;
        display: block;
    }
    :global(.nav-list a) {
        padding: 1em 0.5em;
    }
    .site-title {
        margin: 0;
        padding: 0.5%;
        float: left;
    }
    @media (max-width: 640px) {
        li,
        ul,
        .site-title {
            float: none;
            text-align: center;
        }
        li {
            display: inline-block;
        }
    }
</style>

<nav class="navbar">
    <h1 class="site-title nav-item"><a href="/">Scant Example Site</a></h1>
    <ul class="nav-list">
        <li><Link to="/" name="Home" /></li>
        <li><Link to="/blog" name="Blog" /></li>
        <li><Link to="/not-a-real-page" name="404 Example" /></li>
    </ul>
</nav>

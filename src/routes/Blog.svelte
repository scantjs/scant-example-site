<script>
    let posts = [];

    import { onMount } from 'svelte';
    import { Link } from 'svelte-routes';
    import moment from 'moment';

    onMount(async () => {
        posts = await fetch(`/content/__blog-blob.json`).then(r => r.json());
    });
</script>

<style>
    main {
        width: 50%;
        margin: 0 auto;
        padding: 1em;
    }
    .post-title {
        text-align: center;
    }
    .post-title:hover {
        color: red;
    }
    .post-date {
        color: rgba(127, 127, 127, 0.9);
        text-align: center;
    }
    h3 {
        padding: 0;
        margin: 0;
    }
    .post {
        border-bottom: 1px solid #333;
    }
</style>

<main>
<h2>Posts</h2>
{#each posts as post}
<div class="post">
    <h3 class="post-title"><Link to="/blog/{post.slug}" name="{post.title}" /></h3>
    <div class="post-date">Posted: {moment(post.date).format('MMMM Do YYYY')}</div>
</div>
{/each}
</main>

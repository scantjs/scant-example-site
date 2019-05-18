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
    h2 {
        text-align: center;
        margin-bottom: 0;
    }
    h3 {
        padding: 0;
        margin: 0;
    }
    .post {
        padding: 2em 0 1.5em;
        border-bottom: 1px solid #333;
    }
    .post:last-child {
        border-bottom: none;
    }
    .post-date {
        color: rgba(127, 127, 127, 0.9);
        text-align: center;
    }
    .post-title {
        text-align: center;
    }
    .post-title:hover {
        color: red;
    }
</style>

<main>
<h2>Posts</h2>
{#each posts as post}
<article class="post">
    <h3 class="post-title"><Link to="/blog/{post.slug}" name="{post.title}" /></h3>
    <time class="post-date" datetime="{post.date}">{moment.utc(post.date).format('Do MMMM YYYY')}</time>
</article>
{/each}
</main>

<script>
    export let id;
    let postData;
    let content = '';

    import { onMount } from 'svelte';
    import moment from 'moment';

    onMount(async () => {
        if (id) {
            res = await fetch(`/content/${id}.json`).then(r => r.json());
            content = res.content;
            postData = res.data;
        }
    });
</script>

<style>
    main {
        width: 50%;
        margin: 0 auto;
        padding: 1em;
    }
</style>

<main>
{#if content}
    <div class="post">
        <h2 class="post-title">{postData.title}</h2>
        <p>Posted: {moment(postData.date).format('MMMM Do YYYY')}</p>
        <div>
            {@html content}
        </div>
    </div>
{/if}
</main>

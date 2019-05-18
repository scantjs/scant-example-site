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

<main>
{#if content}
    <div class="post">
        <h2 class="post-title">{postData.title}</h2>
        <time class="post-date" datetime={postData.date}>{moment.utc(postData.date).format('MMMM Do YYYY')}</time>
        <div>
            {@html content}
        </div>
    </div>
{/if}
</main>

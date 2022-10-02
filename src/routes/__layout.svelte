<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";

    import LoadingBar from "$lib/LoadingBar.svelte";
    import Header from "$lib/Header.svelte";
    import Menu from "$lib/Menu.svelte";
    import "../app.css";

    let isNotTopPage: boolean;
    afterNavigate(() => {
        isNotTopPage = $page.url.pathname !== "/";
    });
</script>

{#if isNotTopPage}
    <Header />
{/if}

<div>
    <LoadingBar />
</div>
<Menu />
<main class:main_padding={isNotTopPage}>
    <slot />
</main>

<footer class:top_footer={!isNotTopPage}>
    <p>
        Copyright (c) 2022 Goahi some rights reserved. This application is licensed under the MIT
        license. GitHub:
        <a href="https://github.com/goahi/letter-counter" target="_blank" rel="noopener noreferrer"
            >goahi/letter-counter</a
        >
    </p>
</footer>

<style>
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .main_padding {
        padding: 0 1rem;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 1rem;
    }

    footer a {
        font-weight: bold;
    }

    @media not all and (min-width: 600px) {
        .top_footer {
            display: none !important;
        }
    }
</style>

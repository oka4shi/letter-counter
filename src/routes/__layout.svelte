<script lang="ts">
    import Header from "$lib/Header.svelte";
    import "../app.css";
</script>

<Header />

<main>
    <slot />
</main>

<footer>
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
        padding: 1rem;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
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
</style>

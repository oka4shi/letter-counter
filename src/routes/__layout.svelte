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
        Copyright (c) 2022 Goahi some rights reserved. This works is licensed under the MIT license.
        GitHub:
        <a href="https://github.com/goahi/letter-counter">goahi/letter-counter</a>
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
        padding: 40px;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 40px 0;
        }
    }
</style>

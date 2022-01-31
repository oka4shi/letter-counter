<script lang="ts">
    import { page } from "$app/stores";
</script>

<header>
    <h1>文字数カウンター</h1>

    <nav>
        <ul>
            <li class:active={$page.url.pathname === "/"}>
                <a sveltekit:prefetch href="/">Home</a>
            </li>
            <li class:active={$page.url.pathname === "/license"}>
                <a sveltekit:prefetch href="/license">License</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        width: 100%;
        height: 3rem;
        background-color: lightskyblue;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    h1 {
        font-size: 2rem;
        margin: 0 0.5rem;
    }

    nav {
        margin: 0 1rem;
        display: flex;
        justify-content: center;
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;

        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background-size: contain;
    }

    li {
        padding: 0 0.5rem;
    }

    li.active a {
        --size: 3px;
        border-bottom: var(--size) solid var(--accent-color);
    }

    nav a {
        padding: 0.2rem 0.25rem;
        color: var(--heading-color);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: rgb(255, 255, 255);
    }
</style>

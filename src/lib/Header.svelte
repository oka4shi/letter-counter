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
            <li class:active={$page.url.pathname === "/update"}>
                <a sveltekit:prefetch href="/update">Update</a>
            </li>
            <li class:active={$page.url.pathname === "/license"}>
                <a sveltekit:prefetch href="/license">License</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    :root {
        --size: 3px;
    }
    header {
        width: 100%;
        min-height: 3.5rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.75);
        border-bottom: 1.5px solid #888;
    }

    nav {
        margin: 0 1rem;
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 599px) {
        header {
            flex-direction: column;
        }

        nav {
            margin: 0.2rem 0 calc(0.6rem + 3px);
        }
    }

    h1 {
        margin: 0 0.5rem;
        font-size: 1.875rem;
        color: var(--tertiary-color);
    }

    nav ul {
        position: relative;
        padding: 0;
        margin: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background-size: contain;
    }

    nav li {
        padding: 0 0.5rem;
        position: relative;
    }

    li.active a {
        border-bottom: var(--size) solid var(--accent-color);
    }

    nav a {
        padding: 0.2rem 0.25rem;
        color: var(--tertiary-color);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
    }

    nav a::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: calc(-0.2rem - 5px / 2);
        width: 0px;
        border-bottom: var(--size) solid var(--accent-color);

        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateX(-50%);
        transform-origin: center top;
    }

    nav a:hover::after {
        width: 80%;
    }
</style>

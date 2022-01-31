<script context="module">
    import { browser, dev } from "$app/env";

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // it so that it gets served as a static asset in prod
    export const prerender = true;
</script>

<svelte:head>
    <title>License - 文字数カウンター</title>
</svelte:head>

<div class="content">
    <h2>ライセンス</h2>
    <p>本ページでは使用しているアイコン素材のクレジットを表記しています</p>

    <section id="links">
        <ul>
            <li>
                <a href="https://www.flaticon.com/free-icons/counter" title="counter icons"
                    >Counter icons created by Freepik - Flaticon</a
                >
            </li>
            <li>
                <a href="https://www.flaticon.com/free-icons/pen" title="pen icons"
                    >Pen icons created by Icongeek26 - Flaticon</a
                >
            </li>
        </ul>
    </section>
</div>

<style>
    h2 {
        font-size: 1.75rem;
    }

    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }

    #links {
        padding-top: 1.5rem;
    }

    #links ul {
        padding-left: 1.5em;
    }
</style>

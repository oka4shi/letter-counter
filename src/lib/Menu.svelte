<script lang="ts">
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { menu } from "$lib/store";

    let is_menu_open: boolean;
    menu.subscribe((value) => {
        is_menu_open = value;
    });
</script>

{#if is_menu_open}
    <nav id="global-nav" transition:slide={{ easing: quintOut }}>
        <ul>
            <li>
                <a sveltekit:prefetch href="/">トップ</a>
            </li>
            <li>
                <a sveltekit:prefetch href="/license">ライセンス</a>
            </li>
            <li>
                <a sveltekit:prefetch href="/privacy">プライバシーポリシー</a>
            </li>
            <li>
                <a sveltekit:prefetch href="/update">更新履歴</a>
            </li>
        </ul>
    </nav>
{/if}

<style>
    nav {
        position: fixed;
        margin-top: 3.5rem;
        top: 0;
        background: var(--secondary-color);
    }

    ul {
        position: relative;
        padding: 0;
        margin: 1.5rem;
        margin-top: 0;

        list-style: none;
        background-size: contain;
    }

    li a {
        display: inline-block;
        font-size: 1.25rem;
        text-decoration: none;
        color: white;
        width: 100%;
    }

    li {
        margin: 0.5em 0;
    }

    @media not all and (min-width: 600px) {
        nav {
            position: absolute;
            width: 100vw;
        }
    }
</style>

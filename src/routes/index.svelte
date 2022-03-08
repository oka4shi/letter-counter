<script context="module">
    import { browser } from "$app/env";
    import { onDestroy } from "svelte";

    import { count } from "$lib/count";
</script>

<script lang="ts">
    import type { LetterCounts } from "$lib/types";

    let text = "";
    let counts: LetterCounts;

    let input_text = "";
    let saved_deta = "";

    /* Save and load from localStorage */
    const autosave_interval = 5;
    if (browser) {
        const stored_text = localStorage.getItem("text");

        text = stored_text === null ? "" : stored_text;

        const now = new Date();
        saved_deta = now.toLocaleTimeString();

        setInterval(() => {
            if (localStorage.getItem("text") !== text) {
                localStorage.setItem("text", input_text);
                const now = new Date();
                saved_deta = now.toLocaleTimeString();
            }
        }, autosave_interval * 1000);

        onDestroy(() => {
            localStorage.setItem("text", input_text);
        });

        window.addEventListener("beforeunload", (event) => {
            if (localStorage.getItem("text") !== text) {
                event.preventDefault();
                event.returnValue = "";
            }
        });
    }

    $: {
    counts = count(text)
        input_text = text;
    }
</script>

<svelte:head>
    <title>Home - 文字数カウンター</title>
</svelte:head>

<section class="content">
    <p>ブラウザへの最終保存:{saved_deta}</p>
    <textarea bind:value={text} autocomplete="off" />
    <p>文字数: {counts.letterCount}</p>
    <p>文字数(空白以外): {counts.withoutSpacesCount}</p>
    <p>単語数(英語): {counts.wordCount}</p>
</section>

<style>
    section {
        width: 100%;
        max-width: 100vw;
        margin: var(--column-margin-top) auto 0 auto;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    textarea {
        width: 100%;
        height: 50vh;
        font-size: 18px;
        line-height: 24px;
        font-family: inherit;
    }
</style>

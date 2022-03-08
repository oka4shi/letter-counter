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
    let saved_date = "";

    /* Save and load from localStorage */
    const autosave_interval = 5;
    if (browser) {
        const stored_text = localStorage.getItem("text");

        text = stored_text === null ? "" : stored_text;

        const now = new Date();
        saved_date = now.toLocaleTimeString();

        setInterval(() => {
            if (localStorage.getItem("text") !== text) {
                localStorage.setItem("text", input_text);
                const now = new Date();
                saved_date = now.toLocaleTimeString();
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
        counts = count(text);
        input_text = text;
    }
</script>

<svelte:head>
    <title>Home - 文字数カウンター</title>
</svelte:head>

<section class="content">
    <p>ブラウザへの最終保存:{saved_date}</p>
    <textarea bind:value={text} autocomplete="off" />
    <table>
        <thead>
            <tr>
                <th>種類</th>
                <th>全体</th>
                <th>選択部分</th>
            </tr>
        </thead>
        <tr>
            <th>文字数</th>
            <td>{counts.letterCount}</td>
            <td />
        </tr>
        <tr>
            <th>文字数(空白以外)</th>
            <td>{counts.withoutSpacesCount}</td>
            <td />
        </tr>
        <tr>
            <th>単語数(英語)</th>
            <td>{counts.wordCount}</td>
            <td />
        </tr>
    </table>
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

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        table-layout: fixed;
        width: 100%;
    }

    table th,
    table td {
        padding: 0.75rem 0;
        text-align: center;
        border: solid 2px #fff;
    }

    table thead th {
        background-color: #576ca8;
        color: var(--tertiary-color);
    }

    table tr:nth-child(2n + 1) {
        background-color: #eee;
    }

    table th {
        font-size: 1.125rem;
    }

    table td {
        font-size: 1.625rem;
    }

    table thead th:nth-of-type(1) {
        width: 35%;
    }

    table thead th:nth-of-type(2) {
        width: 32.5%;
    }
    table thead th:nth-of-type(3) {
        width: 32.5%;
    }
</style>

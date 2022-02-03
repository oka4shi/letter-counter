<script context="module">
    import { browser } from "$app/env";
    import { onDestroy } from "svelte";
    export const prerender = true;
</script>

<script lang="ts">
    const count_num = (text: string): number => [...text].length;

    const delete_spaces = (text: string): string => {
        const reg =
            /[\u0009-\u000d\u001c-\u0020\u11a3-\u11a7\u1680\u180e\u2000-\u200f\u202f\u205f\u2060\u3000\u3164\ufeff\u034f\u2028\u2029\u202a-\u202e\u2061-\u2063\ufeff]/gi;
        return text.replaceAll(reg, "");
    };

    const count_words = (text: string): number => {
        const blanks =
            /[\u0009-\u000d\u001c-\u0020\u11a3-\u11a7\u1680\u180e\u2000-\u200f\u202f\u205f\u2060\u3000\u3164\ufeff\u034f\u2028\u2029\u202a-\u202e\u2061-\u2063\ufeff]/gi;

        const normalized_blanks = text.replaceAll(blanks, " ");
        const excluded_duplicates = normalized_blanks.replaceAll(/ {2,}/g, " ");

        return excluded_duplicates.split(" ").filter((v) => v).length;
    };

    let text = "";
    let letter_number = 0;
    let letter_without_spaces = 0;
    let words_count = 0;

    let input_text = "";
    let saved_deta = "";

    /* Save and load from localStorage */
    const autosave_interval = 5;
    if (browser) {
        const stored_text = localStorage.getItem("text");

        text = stored_text === null ? "" : stored_text;

        const now = new Date()
        saved_deta = now.toLocaleTimeString();


        setInterval(() => {
        if (localStorage.getItem("text") !== text){
            localStorage.setItem("text", input_text);
            const now = new Date()
            saved_deta = now.toLocaleTimeString();
            
        }}, autosave_interval * 1000);

        onDestroy(() => {
            localStorage.setItem("text", input_text);
        });

        window.addEventListener("beforeunload", (event) => {
        if (localStorage.getItem("text") !== text){
            event.preventDefault();
            event.returnValue = "";
            
        }});
    }

    $: {
        letter_number = count_num(text);
        letter_without_spaces = count_num(delete_spaces(text));
        words_count = count_words(text);

        input_text = text;
    }
</script>

<svelte:head>
    <title>Home - 文字数カウンター</title>
</svelte:head>

<section class="content">
    <p>ブラウザへの最終保存:{saved_deta}</p>
    <textarea bind:value={text} autocomplete="off" />
    <p>文字数: {letter_number}</p>
    <p>文字数(空白以外): {letter_without_spaces}</p>
    <p>単語数(英語): {words_count}</p>
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
        font-size: 16px;
        line-height: 24px;
    }
</style>

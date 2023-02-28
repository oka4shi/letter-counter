<script context="module">
    import { browser } from "$app/environment";
    import { onMount, onDestroy } from "svelte";
    import { count } from "$lib/count";
</script>

<script lang="ts">
    import type { LetterCounts } from "$lib/types";
    import ToolBar from "$lib/ToolBar.svelte";
    import Display from "$lib/Display.svelte";
    import { save_to_localstorage } from "$lib/save";

    let placeholder = "読み込み中……";

    let textarea: HTMLTextAreaElement;
    let text = "";
    let counts: LetterCounts;
    let selected_counts: LetterCounts;

    let input_text = "";
    let selected_text = "";
    let saved_date = "";

    const unload_check = (event: any) => {
        if (localStorage.getItem("text") !== text) {
            event.preventDefault();
            event.returnValue = "";
        }
    };

    const start_autosave = (autosave_interval: number) => {
        placeholder = "ここにテキストを入力するとカウントされます";

        window.addEventListener("beforeunload", unload_check);
        const autosave_interval_id = window.setInterval(() => {
            if (localStorage.getItem("text") !== text) {
                save_to_localstorage(input_text);
            }
        }, autosave_interval * 1000);
        return autosave_interval_id;
    };

    const stop_autosave = (interval_id: number) => {
        window.clearInterval(interval_id);
        window.removeEventListener("beforeunload", unload_check);
        localStorage.setItem("text", input_text);
    };

    /* Save and load from localStorage */
    if (browser) {
        const stored_text = localStorage.getItem("text");

        text = stored_text;
        if (text === null) {
            text = "";
        }

        const now = new Date();
        saved_date = now.toLocaleTimeString();

        onMount(() => {
            const autosave_interval_id = start_autosave(5);
            return stop_autosave(autosave_interval_id); //called when the component is unmounted
        });
    }

    $: {
        input_text = text;
        if (textarea) {
            count_selected();
        }

        counts = count(text);
        selected_counts = count(selected_text);
    }

    let timer_id: number;
    const start_count = () => {
        timer_id = window.setInterval(() => {
            count_selected();
        }, 50);
    };

    const stop_count = () => {
        window.clearInterval(timer_id);
    };

    const count_selected = () => {
        selected_text = text.substring(textarea.selectionStart, textarea.selectionEnd);
    };
</script>

<svelte:head>
    <title>Home - 文字数カウンター</title>
</svelte:head>

<ToolBar {input_text} />

<section class="content" on:mousedown={start_count} on:mouseup={stop_count}>
    <textarea
        {placeholder}
        bind:value={text}
        bind:this={textarea}
        on:select={count_selected}
        on:click={count_selected}
        autocomplete="off"
    />
    <Display {counts} {selected_counts} />
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
        height: 50vh;
        height: 50dvh;
        font-size: 18px;
        line-height: 24px;
        font-family: inherit;
        margin: 0;
        background: var(--primary-color);
        color: var(--text-color);
        resize: vertical;
        outline: none;
        border: none;
    }

    @media not all and (min-width: 600px) {
        section {
            height: calc(100vh - var(--column-margin-top));
        }
        textarea {
            height: calc(100vh - 10rem);
            resize: none;
            margin: 0 1rem;
        }
    }
</style>

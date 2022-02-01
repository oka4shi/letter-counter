<script context="module">
    export const prerender = true;
</script>

<script lang="ts">
    const count_num = (text: string): number =>  [...text].length;

    const count_without_spaces = (text: string): number => {
        const reg =
            /[\u0009-\u000d\u001c-\u0020\u11a3-\u11a7\u1680\u180e\u2000-\u200f\u202f\u205f\u2060\u3000\u3164\ufeff\u034f\u2028\u2029\u202a-\u202e\u2061-\u2063\ufeff]/gi;

        const replaced = text.replace(reg, "");
        return [...replaced].length;
    };
    let text = "";
    let letter_number = 0;
    let letter_without_spaces = 0;

    $: letter_number = count_num(text);
    $: letter_without_spaces = count_without_spaces(text);
</script>

<svelte:head>
    <title>Home - 文字数カウンター</title>
</svelte:head>

<section class="content">
    <textarea bind:value={text} autocomplete="off" />
    <p>文字数: {letter_number}</p>
    <p>文字数(空白以外): {letter_without_spaces}</p>
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

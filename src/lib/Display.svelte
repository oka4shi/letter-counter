<script lang="ts">
    import type { LetterCounts } from "$lib/types";
    export let counts: LetterCounts;
    export let selected_counts: LetterCounts;
</script>

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
        <td>{selected_counts.letterCount}</td>
    </tr>
    <tr>
        <th>文字数(空白以外)</th>
        <td>{counts.withoutSpacesCount}</td>
        <td>{selected_counts.withoutSpacesCount}</td>
    </tr>
    <tr>
        <th>単語数(英語)</th>
        <td>{counts.wordCount}</td>
        <td>{selected_counts.wordCount}</td>
    </tr>
</table>

<div class="sp_display">
    <p>文字数: {counts.letterCount} (選択部分: {selected_counts.letterCount})</p>
    <p>
        文字数(空白以外): {counts.withoutSpacesCount} (選択部分: {selected_counts.withoutSpacesCount})
    </p>
    <p>単語数(英語): {counts.wordCount} (選択部分: {selected_counts.wordCount})</p>
</div>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        table-layout: fixed;
        width: 100%;
        padding: 0 1rem;
    }

    table th,
    table td {
        padding: 0.75rem 0;
        text-align: center;
        border: solid 2px #fff;
    }

    table thead th {
        background-color: #576ca8;
        color: var(--text-color);
    }

    table tr:nth-child(2n) {
        background-color: #bbb;
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

    .sp_display {
        display: none;

        position: fixed;
        bottom: 0;

        width: 100vw;
        height: 7rem;
        padding: 0;
        border-radius: 30px 40px 0 0;
        border: 3px solid var(--secondary-color);
        border-bottom: none;
        box-sizing: border-box;

        color: var(--text-color);
        background: var(--tertiary-color);
    }

    .sp_display p {
        margin: 0.5rem;
        margin-left: 1rem;
    }

    @media not all and (min-width: 600px) {
        table {
            display: none;
        }
        .sp_display {
            display: block;
        }
    }
</style>

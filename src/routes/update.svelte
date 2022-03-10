<script context="module">
    import { browser, dev } from "$app/env";

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;
</script>

<svelte:head>
    <title>Update - 文字数カウンター</title>
</svelte:head>

<article id="update">
    <header>
        <h2>アップデート履歴</h2>
        <p>
            これまでの更新履歴をまとめています。<br />
            全ての更新履歴は<a href="https://github.com/goahi/letter-counter/commits/main">GitHub</a
            >にあります。
        </p>
    </header>

    <main>
        <section>
            <h3><time datetime="2022-03-10">2022年3月10日</time></h3>
            <ul>
                <li>このページ(更新履歴)を作成</li>
                <li>文字入力部分のはみ出しを修正</li>
            </ul>
        </section>
        <section>
            <h3><time datetime="2022-03-09">2022年3月9日</time></h3>
            <ul>
                <li>選択部分のみカウントする機能を追加</li>
                <li>SvelteKitのバージョンを更新(251→294)</li>
            </ul>
        </section>
        <section>
            <h3><time datetime="2022-03-08">2022年3月8日</time></h3>
            <ul>
                <li>表示部のデザインを改善</li>
                <li>ヘッダーのデザインを変更</li>
                <li>フォントの設定を見直し</li>
                <li>その他、細かいデザインの調整</li>
            </ul>
        </section>
        <section>
            <h3><time datetime="2022-02-27">2022年2月27日</time></h3>
            <ul>
                <li>フッターのGitHubのリンクを新しいタブで開くように</li>
                <li>文字入力部分のデザインの調整</li>
            </ul>
        </section>
        <section>
            <h3><time datetime="2022-02-03">2022年2月3日</time></h3>
            <ul>
                <li>リリース</li>
            </ul>
        </section>
    </main>
</article>

<style>
    h2 {
        font-size: 1.75rem;
    }

    #update {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }

    main {
        padding-top: 0.5rem;
    }

    main ul {
        padding-left: 1.5em;
    }

    section {
        padding: 0.25rem 0;
    }
</style>

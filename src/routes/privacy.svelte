<svelte:head>
    <title> プライバシーについて - 文字数カウンター</title>
</svelte:head>

<section class="content">
    <h2>プライバシーについて</h2>
    
    <h3>はじめに</h3>
    <p>文字数カウンターでは、プライバシーを非常に重要視しています。現時点で、入力したデータがネットワーク上にアップロードされることは一切ありません。また、Google Analyticsなどでのトラッキングも一切行っていません。</p>

    <h3>収集する情報とその取り扱い</h3>
    <p>文字数カウンターはオンプレミスのサーバー上で公開され、CloudFlareをキャッシュ、リバースプロキシに利用しています。サービスの提供や改善のため、以下の情報をCloudFlareと運営者のごあいが取得、保存、確認する場合があります。なお、いかなる理由があろうとこれを第三者に共有することはありません。</p>
    <ul>
        <li>接続元のグローバルIPアドレス</li>
        <li>使用しているブラウザの情報(ユーザーエージェント)</li>
    </ul>

    <h3>Service Workerの利用</h3>
    <p>文字数カウンターでは、オフラインで利用できるようにするためService Workerという仕組みを利用しています。Service Workerには、バックグラウンドで処理を実行したり通知を送ったりする機能もありますが、そのような目的には利用していません。</p>

    <h3>透明性の確保</h3>
    <p>すべてのソースプログラムは<a href="https://github.com/goahi/letter-counter" target="_blank" rel="noopener noreferrer"
            >GitHub</a>上でオープンソース(MITライセンス)で公開しています。Webサイト上ではこれに一切手を加えず、そのまま使用しています。</p>
    
    <h3>連絡先</h3>
    <p>もし何か疑問点などがありましたら、些細なことでもお気軽にお問い合わせください。メールアドレス: goai@protonmail.com</p>
</section>

<style>
    h2 {
        font-size: 1.75rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>

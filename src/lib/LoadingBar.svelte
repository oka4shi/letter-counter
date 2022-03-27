<script>
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { navigating } from "$app/stores";

    const progress = tweened(0, {
        duration: 2000,
        easing: cubicOut,
    });

    $: {
        (async function () {
            if ($navigating) {
                progress.set(0.7);
            }

            if (!$navigating) {
                progress.set(1, { duration: 300 });
                await new Promise((s) => setTimeout(s, 350));
                progress.set(0, { duration: 0 });
            }
        })();
    }
</script>

<div class="progress-bar">
    <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
</div>

<style>
    .progress-bar {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        height: 0.2rem;
    }
    .progress-sliver {
        width: var(--width);
        background-color: #f8485e;
        height: 100%;
    }
</style>

<script lang="ts">
    import MenuButton from "$lib/MenuButton.svelte";
</script>

<header>
    <MenuButton />
</header>

<style>
    :root {
        --size: 3px;
    }
    header {
        width: 100%;
        min-height: 3rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;

        background-color: hsl(0, 0%, 10%);
        border-bottom: 2px solid var(--secondary-color);
    }

    @media not all and (min-width: 600px) {
        header {
            position: absolute;
        }
    }
</style>

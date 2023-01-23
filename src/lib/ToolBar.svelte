<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { menu } from "$lib/store";
    import MenuButton from "$lib/MenuButton.svelte";

    import { save_to_localstorage } from "$lib/save";

    export let input_text: string;
    let saved_date: string;

    const save = () => {
        save_to_localstorage(input_text);
    };
</script>

<header>
    <MenuButton />
    <button id="save" on:click={save}>保存</button>
</header>

<style>
    :root {
        --size: 3px;
    }
    header {
        width: 100%;
        min-height: 3.5rem;
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

    #save {
        display: inline;
        margin: 0 0.5em;
        padding: 0.375em 0.625em;
        border-radius: 0.5em;

        background: var(--pure-white);
        color: var(--primary-color);

        font-size: 1rem;
        font-weight: 500;

        border: none;
        outline: none;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
    }

    #save:hover {
        opacity: 0.85;
    }

    #save:active {
        opacity: 0.75;
    }
</style>

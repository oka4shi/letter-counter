<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { menu } from "$lib/store";

    import { save_to_localstorage } from "$lib/save";

    export let input_text: string;
    let saved_date: string;

    function toggle_menu() {
        menu.update((is_open) => {
            return !is_open;
        });
    }

    afterNavigate(() => {
        menu.update(() => {
            return false;
        });
    });

    const save = () => {
        save_to_localstorage(input_text);
    };
</script>

<header>
    <button id="menu" type="button" aria-controls="global-nav" on:click={toggle_menu}>
        <div class="menu_icon_wrapper">
            <div class="menu_icon" />
            <div class="menu_icon" />
            <div class="menu_icon" />
        </div>
        <span class="aria">メニューを開く</span>
    </button>
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

    #menu {
        margin: 0 1rem;

        -webkit-appearance: none;
        appearance: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .menu_icon_wrapper {
        position: relative;
        width: 1.75rem;
        display: block;
        margin: 0.25rem;
        height: 100%;
    }

    .menu_icon {
        width: 100%;
        height: 0.25rem;
        background: white;
        margin: 0.375rem 0;
    }

    .menu_icon_wrapper:hover .menu_icon {
        background: hsl(0, 0%, 90%);
    }

    #menu .aria {
        position: absolute;
        white-space: nowrap;
        width: 1px;
        height: 1px;
        overflow: hidden;
        border: 0;
        padding: 0;
        clip-path: inset(50%);
        margin: -1px;
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

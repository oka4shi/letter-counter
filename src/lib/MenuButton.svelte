<script lang="ts">
    import { menu } from "$lib/store";

    let is_menu_open: boolean;
    menu.subscribe((value) => {
        is_menu_open = value;
    });

    function toggle_menu() {
        menu.update((is_open) => {
            return !is_open;
        });
    }
</script>

<button
    id="menu"
    type="button"
    aria-expanded={is_menu_open}
    aria-controls="global-nav"
    on:click={toggle_menu}
>
    <div class="menu_icon_wrapper">
        <div class="menu_icon" />
        <div class="menu_icon" />
        <div class="menu_icon" />
    </div>
    <span class="aria">メニューを開く</span>
</button>

<style>
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
</style>

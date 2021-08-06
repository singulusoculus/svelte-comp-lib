<script>
    import { slide } from 'svelte/transition'
    import Icon from '$lib/ui/Icon.svelte'

    export let icon = "search"
    export let title = "Title"
    export let isOpen = false

    const toggleCollapsible = () => {
        isOpen = !isOpen
    }
</script>

<style>
    section {
        -webkit-box-shadow: 0 1px 5px 0 rgba(0,0,0,0.18), 0 0px 11px 0 rgba(0,0,0,0.15);
        box-shadow: 0 1px 5px 0 rgba(0,0,0,0.18), 0 0px 11px 0 rgba(0,0,0,0.15);
        margin: 0 auto;
        width: 98%;
        transition: width 400ms, margin 400ms;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        line-height: 1.9;
        padding: 1.8rem;
        background-color: var(--back-3);
        border-bottom: 1px solid #ddd;
        font-size: 1.8rem;
        transition: border-bottom .4s;
    }

    .active > .header {
        border-bottom: 1px solid var(--flash);
    }

    .title {
        flex: 1;
        margin-left: 1rem;
    }

    .body {
        padding: 2.8rem;
        font-size: 1.5rem;
        background-color: var(--back-2);
    }

    .active {
        width: 100%;
        margin: 2rem auto;
        -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
        box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
        /* transform: scaleX(1); */
    }
</style>

<section class:active="{isOpen}">
    <div class="header" on:click="{toggleCollapsible}">
        <Icon name={icon} />
        <span class="title">{title}</span>
        <slot name="header-button"></slot>
    </div>

    {#if isOpen}
    <div class="body" transition:slide|local="{{duration: 400}}">
        <slot>This is some body text</slot>
    </div>
    {/if}

</section>
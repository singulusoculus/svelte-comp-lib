<script>
    import { fade } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let persist = false
</script>

{#if !persist}
<div class="backdrop" on:click={() => dispatch('clicked')} transition:fade></div>
{:else}
<div class="backdrop"></div>
{/if}

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index:395;
    }
</style>
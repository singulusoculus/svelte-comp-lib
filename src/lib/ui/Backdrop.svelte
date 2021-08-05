<script>
    import { fade } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let persist = false
    export let z = 30
</script>

{#if !persist}
<div class="backdrop" on:click={() => dispatch('clicked')} transition:fade style="--z: {z}"></div>
{:else}
<div class="backdrop" style="--z: {z}"></div>
{/if}

<style>
    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.3);
        z-index: var(--z);  
        overflow: hidden;     
    }
</style>
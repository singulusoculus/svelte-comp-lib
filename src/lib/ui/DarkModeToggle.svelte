<script>
    import Icon from '$lib/ui/Icon.svelte'

    let darkMode = true

    const toggleMode = () => {
        darkMode = !darkMode
        document.body.classList.toggle('theme-dark')
    }
</script>

<div class="darkmode-icon">
    {#if darkMode}
        <Icon name='moon' on:clicked={toggleMode} size={28} />
        {:else}
        <Icon name='sun' on:clicked={toggleMode} size={28} />
    {/if}
</div>


<style>
    .darkmode-icon > :global(.icon):hover {
        color: var(--flash);
    }

</style>
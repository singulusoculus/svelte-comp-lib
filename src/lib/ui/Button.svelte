<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    import Icon from '$lib/ui/Icon.svelte'

    export let text = "Placeholder"
    export let disabled = false
    export let linkref = null
    export let icon = null
    export let fab = false
</script>

<style>
    button {
        text-decoration: none;
        color: #fff;
        background-color: var(--prime);
        text-align: center;
        letter-spacing: .5px;
        -webkit-transition: all .2s ease-out;
        transition: all .2s ease-out;
        cursor: pointer;
        font-size: 1.4rem;
        outline: 0;
        height: 36px;
        padding: 0 16px;
        border: none;
        border-radius: 2px;
        transition: all .2s;
        display: flex;
        align-items: center;
        margin: 1rem;
        white-space: nowrap;
    }

    button:hover {
        background-color: var(--flash);
        transform: translateY(-2px);
        -webkit-box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    }
    
    button:active {
        background-color: var(--flash);
        transform: translateY(1px);
        box-shadow: none;
    }
    
    button:disabled {
        background-color: var(--second);
        transition: unset;
        cursor: unset;
    }

    button:hover:disabled {
        transform: unset;
        box-shadow: unset;
    }

    button:active:disabled,
    button:hover:disabled {
        background-color: var(--second);
    }

    a {
        text-decoration: none;
    }

    button > :global(.icon) {
        margin-left: 5px;
    }

    button.fab {
        border-radius: 50%;
        min-width: 4.5rem;
        min-height: 4.5rem;
        padding: 0.5rem;
    }

    button.fab > :global(.icon) {
        margin: 0 auto;
    }

</style>


{#if !fab}
    {#if linkref}
    <a href="{linkref}" target="_blank">
        <button type="button"  disabled={disabled}>
            <span>{text}</span>
            {#if icon}
                <Icon name={icon} />
            {/if}
        </button>
    </a>
    {:else}
        <button on:click={() => dispatch('clicked')} disabled={disabled}>
            <span>{text}</span>
            {#if icon}
                <Icon name={icon} />
            {/if}
        </button>
    {/if}
{:else}
    <button class="fab" on:click="{() => dispatch('clicked')}">
        <Icon name={icon} />
    </button>
{/if}
<script>
    import { createEventDispatcher } from 'svelte'
    let dispatch = createEventDispatcher()
    
    import Icon from '$lib/ui/Icon.svelte'

    export let text = null
    export let placeholder = null
    export let prependIcon = ''
    export let appendIcon = ''
    export let inputType = 'text'
    export let label = null
    export let rows = 5
    
    $: isFilled =  placeholder || text || text === 0 ? true : false
    $: hasPrependIcon = prependIcon ? true : false
</script>

<div class="text-input">
    {#if inputType === 'text'}
        <input type="text" {placeholder} bind:value={text} class:has-icon={hasPrependIcon} on:input={() => dispatch('textChange', text)}>
    {:else if inputType === 'number'}
        <input type="number" {placeholder} bind:value={text} class:has-icon={hasPrependIcon} on:input={() => dispatch('textChange', text)}>
    {:else if inputType === 'textarea'}
        <textarea rows={rows} bind:value={text}></textarea>
    {/if}

    {#if label}
        <label for="" class:is-filled="{isFilled}" class:has-icon={hasPrependIcon}>{label}</label>
    {/if}

    {#if prependIcon}
        <div class="prepend-icon-wrapper" on:click={() => dispatch("click-icon")}>
            <Icon name={prependIcon} />
        </div>
    {/if}

    {#if appendIcon}
        <div class="append-icon-wrapper" on:click={() => dispatch("click-icon")}>
            <Icon name={appendIcon} />
        </div>
    {/if}
    
    {#if inputType !== "textarea"}
    <div class="line">
        <div class="focused-line"></div>
    </div>
    {/if}
</div>

<style>
    textarea {
        border-radius: 3px;
        border: 1px solid var(--black);
        resize: vertical;
        padding: 1.2rem;
        width: 100%;
        transition: border-color 0.3s;
        font: var(--font);
        font-size: 1.8rem;
        background-color: var(--back);
        color: var(--text);
    }

    .text-input {
        position: relative;
        margin: .5rem 0 1.5rem 0;
    }

    label {
        position: absolute;
        top: 0;
        padding: 1.5rem 1rem .5rem 1rem;
        margin-left: .5rem;
        pointer-events: none;
        transition: font-size 0.2s, line-height 0.3s, padding 0.3s;
        cursor: text;
        display: block;
        font-size: 1.5rem;
        
    }

    input {
        width: 100%;
        color: var(--text);
        padding: 2rem 1rem .5rem 1rem;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        border: none;
        background-color: var(--back-2);
        font-size: 1.8rem;
        font-family: var(--font);
    }

    input::placeholder {
        color: var(--text-second);
    }

    .line {
        position: absolute;
        height: 1px;
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: var(--black);
    }

    .focused-line {
        height: 0;
        width: 0;
        transition: width .3s ease 0s;
        background-color: var(--flash);
        margin: auto;
    }

    .prepend-icon-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1.5rem 1rem 1rem 1rem;
        display: block;
    }

    .append-icon-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1.5rem 1rem 1rem 1rem;
        display: block;
    }

    .has-icon {
        padding-left: 4rem;
    }

    div:focus, input:focus, textarea:focus {
        outline: none;
    }
    
    input:focus+label {
        line-height: 0.05;
        font-size: 1.2rem;
        color: var(--flash);
    }

    input+label.is-filled {
        line-height: 0.05;
        font-size: 1.2rem;
    }

    input:focus ~ .line {
        background-color: var(--flash);
    }

    input:focus ~ .line > .focused-line {
        width: 100%;
        height: 2px;
    }

    input:focus ~ .prepend-icon-wrapper,
    input:focus ~ .append-icon-wrapper {
        color: var(--flash);
    }

    textarea:focus {
        border-color: var(--flash);
        border-width: 2px;
    }

    textarea:focus + label {
        line-height: 0.05;
        font-size: 1.2rem;
        background-color: var(--back);
        color: var(--flash);
        padding-top: 0
    }

    textarea+label.is-filled {
        line-height: 0.05;
        font-size: 1.2rem;
        background-color: var(--back);
        padding-top: 0;
    }
</style>
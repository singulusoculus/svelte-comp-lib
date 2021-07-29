<script>
    import { createEventDispatcher } from 'svelte'
    import Icon from '$lib/ui/Icon.svelte'

    export let label = null
    export let id
    export let icon = null
    export let placeholder = null
    export let inputType = 'text'

    let dispatch = createEventDispatcher()

    export let text = null
    
    $: isFilled =  placeholder || text || text === 0 ? true : false
    $: lineCount = inputType === "textarea" && text !== null ? text.split(/\r*\n/).length : 1
    $: textareaSize = resizeTextarea(lineCount)

    const resizeTextarea = (count) => {

        dispatch('textChange', text)

        if (count === 1) {
            return 50
        } else if ( count > 14) {
            return 259
        } else {
            return 25 + ((count-1) * 25)
        }
    }

</script>

<style>
    .input-field {
        position: relative;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        font-size: 1.6rem;
        flex: 1 0 auto;
    }

    input[type=text], input[type=number],
    textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #9e9e9e;
        border-radius: 0;
        outline: none;
        height: 3rem;
        width: 100%;
        font: var(--font);
        font-size: 16px;
        margin: 0 0 8px 0;
        padding: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        -webkit-transition: border .3s, -webkit-box-shadow .3s;
        transition: border .3s, -webkit-box-shadow .3s;
        transition: box-shadow .3s, border .3s;
        transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;
    }

    .input-field > label {
        color: #9e9e9e;
        position: absolute;
        top: 0;
        left: 5px;
        font-size: 1.4rem;
        cursor: text;
        -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;
        transition: color .2s ease-out, -webkit-transform .2s ease-out;
        transition: transform .2s ease-out, color .2s ease-out;
        transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
        text-align: initial;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
    }

    input:focus+label {
        -webkit-transform: translateY(-14px) scale(0.8);
        transform: translateY(-14px) scale(0.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        color: var(--prime);
    }

    input:focus, textarea:focus {
        border-bottom: 1px solid var(--prime);
    }

    label.is-filled {
        -webkit-transform: translateY(-14px) scale(0.8);
        transform: translateY(-14px) scale(0.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }

    .text-input {
        display: flex;
        align-items: center ;
    }

    /* TEXT AREA */

    textarea {
        line-height: 1.5;
        overflow-y: hidden;
        padding: .8rem 0 0 .8rem;
        resize: none;
        min-height: 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: auto;
        border-left: 1px solid #9e9e9e;
    }

    textarea:focus+label {
        -webkit-transform: translateY(-14px) scale(0.8);
        transform: translateY(-14px) scale(0.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        color: var(--prime)
    }

    textarea + label {
        color: #9e9e9e;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
        cursor: text;
        -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;
        transition: color .2s ease-out, -webkit-transform .2s ease-out;
        transition: transform .2s ease-out, color .2s ease-out;
        transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
        text-align: initial;
        -webkit-transform: translateY(12px);
        transform: translateY(12px);
    }

    .text-input > :global(svg) {
        margin-right: 8px;
    }

</style>

<div class="text-input">
    {#if icon}
        <Icon name={icon} />
    {/if}
    <div class="input-field">
        {#if inputType === 'textarea'}
            <textarea id="{id}" style="height:{textareaSize}px" bind:value={text} ></textarea>
        {:else if inputType === 'number'}
            <input id="{id}" type="number" bind:value={text} placeholder="{placeholder}" on:input="{() => dispatch('textChange', text)}">
        {:else if inputType === 'text'}
            <input id="{id}" type="text" bind:value={text} placeholder="{placeholder}" on:input="{() => dispatch('textChange', text)}">
        {/if}
        {#if label}
            <label for="{id}" class:is-filled="{isFilled}">{label}</label>
        {/if}
    </div>
</div>
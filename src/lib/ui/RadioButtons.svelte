<script>
    import { createEventDispatcher } from 'svelte' 

    export let radioButtons = [
        {
            id: 'boardgames',
            name: 'bgg-search-type',
            title: 'Board Games',
            selected: true
        },
        {
            id: 'expansions',
            name: 'bgg-search-type',
            title: 'Expansions',
            selected: false
        }
    ]

    let dispatch = createEventDispatcher()

</script>

<style>
    div {
        display: flex;
        justify-content: space-around;
        margin: .5rem 0;
    }

    label {
        font-size: 1.6rem;
        margin-right: 1rem;
    }

    /* Remove default Radio Buttons */
    [type="radio"]:not(:checked),
    [type="radio"]:checked {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }

    [type="radio"]:not(:checked) + span,
    [type="radio"]:checked + span {
        position: relative;
        padding-left: 3.5rem;
        cursor: pointer;
        display: inline-block;
        height: 2.5rem;
        line-height: 25px;
        user-select: none;
    }

    [type="radio"] + span:before,
    [type="radio"] + span:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        margin: 4px;
        width: 16px;
        height: 16px;
        z-index: 0;
        transition: transform .28s ease;
    }

    /* Unchecked styles */
    [type="radio"]:not(:checked) + span:before,
    [type="radio"]:not(:checked) + span:after,
    [type="radio"]:checked + span:before,
    [type="radio"]:checked + span:after {
        border-radius: 50%;
    }

    [type="radio"]:not(:checked) + span:before,
    [type="radio"]:not(:checked) + span:after {
        border: 2px solid #527a45;
    }

    [type="radio"]:not(:checked) + span:after {
        transform: scale(0);
        transform-origin: center;
    }

    /* Checked styles */
    [type="radio"]:checked + span:before {
        border: 2px solid #527a45;
    }

    [type="radio"]:checked + span:after {
        background-color: #527a45;
    }

    [type="radio"] + span:after {
        transform: scale(1.02);
    }

    /* Radio With gap */
    [type="radio"]:checked + span:after {
        transform: scale(.7);
        transform-origin: center;
        top: 2px;
        left: 2px;
    }

</style>

<div>
    {#each radioButtons as rb (rb.id)}
        <label on:click="{() => dispatch('select', rb.id)}">
            <input id={rb.id} name={rb.name} type="radio" checked="{rb.selected}">
            <span>{rb.title}</span>
        </label>
    {/each}
</div>
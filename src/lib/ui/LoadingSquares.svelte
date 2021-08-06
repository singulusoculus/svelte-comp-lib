<script>
    import Backdrop from './Backdrop.svelte'

    export let loading
    export let inline = false
</script>
{#if loading}
    {#if !inline}
        <Backdrop />

        <div class="loading-squares">
            <div class="scaling-squares-spinner">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
        </div>
    {:else}
        <div class="inline loading-squares">
            <div class="scaling-squares-spinner">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
        </div>
    {/if}

{/if}

<style>
    .loading-squares {
        position: absolute;
        z-index: 90;
        height: 2em;
        width: 2em;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .inline.loading-squares {
        position: relative;
        left: unset;
        top: unset;
        margin: unset;
    }

    .scaling-squares-spinner, .scaling-squares-spinner * {
    box-sizing: border-box;
    /* position: fixed; */
    z-index: 90;
    height: 8rem;
    width: 8rem;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    }

    .scaling-squares-spinner {
    height: 65px;
    width: 65px;
    animation: scaling-squares-animation 1250ms;
    animation-iteration-count: infinite;
    transform: rotate(0deg);
    }

    .scaling-squares-spinner .square {
    height: calc(65px * 0.25 / 1.3);
    width: calc(65px * 0.25 / 1.3);
    margin-right: auto;
    margin-left: auto;
    /* border: calc(65px * 0.04 / 1.3) solid #14DB06; */
    border: calc(65px * 0.04 / 1.3) solid #527A45;
    position: absolute;
    animation-duration: 1250ms;
    animation-iteration-count: infinite;
    }

    .scaling-squares-spinner .square:nth-child(1) {
    animation-name: scaling-squares-spinner-animation-child-1;
    }

    .scaling-squares-spinner .square:nth-child(2) {
    animation-name: scaling-squares-spinner-animation-child-2;
    }

    .scaling-squares-spinner .square:nth-child(3) {
    animation-name: scaling-squares-spinner-animation-child-3;
    }

    .scaling-squares-spinner .square:nth-child(4) {
    animation-name: scaling-squares-spinner-animation-child-4;
    }


    @keyframes scaling-squares-animation {

    50% {
        transform: rotate(90deg);
    }

    100% {
        transform: rotate(180deg);
    }
    }

    @keyframes scaling-squares-spinner-animation-child-1 {
    50% {
        transform: translate(150%,150%) scale(2,2);
    }
    }

    @keyframes scaling-squares-spinner-animation-child-2 {
    50% {
        transform: translate(-150%,150%) scale(2,2);
    }
    }

    @keyframes scaling-squares-spinner-animation-child-3 {
    50% {
        transform: translate(-150%,-150%) scale(2,2);
    }
    }

    @keyframes scaling-squares-spinner-animation-child-4 {
    50% {
        transform: translate(150%,-150%) scale(2,2);
    }
    }
</style>
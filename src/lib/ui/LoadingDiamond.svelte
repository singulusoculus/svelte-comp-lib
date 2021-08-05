<script>
    import { fade } from 'svelte/transition'
    import Backdrop from './Backdrop.svelte'

    export let loading
    export let style = 'left-right'
    export let inline = false
</script>

<style>
    .loading {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 60px;
        height: 60px;
        z-index: 90;
    }

    .inline.loading {
        position: relative;
        left: unset;
        top: unset;
        z-index: 90;
    }
        
    .loading .l {
        position: absolute;
        width: 33.3%;
        height: 33.3%;

        animation: loading-l 1.75s infinite ease-in-out;
        transform: scale(.85, .85);
    }


    /* loading-l TOP DOWN top-down */
    .top-down.loading .l.l1 {
        animation-delay: .1s;
    }
    .top-down.loading .l.l2 {
        animation-delay: .2s;
    }
    .top-down.loading .l.l4 {
        animation-delay: .2s;
    }
    .top-down.loading .l.l3 {
        animation-delay: .3s;
    }
    .top-down.loading .l.l5 {
        animation-delay: .3s;
        display: none;
    }
    .top-down.loading .l.l7 {
        animation-delay: .3s;
    }
    .top-down.loading .l.l6 {
        animation-delay: .4s;
    }
    .top-down.loading .l.l8 {
        animation-delay: .4s;
    }
    .top-down.loading .l.l9 {
        animation-delay: .5s;
    }


    /* loading-l BOTTOM UP bottom-up */
    .bottom-up.loading .l.l9 {
        animation-delay: .1s;
    }
    .bottom-up.loading .l.l6,
    .bottom-up.loading .l.l8 {
        animation-delay: .2s;
    }
    .bottom-up.loading .l.l7,
    .bottom-up.loading .l.l3 {
        animation-delay: .3s;
    }
    .bottom-up.loading .l.l2,
    .bottom-up.loading .l.l4 {
        animation-delay: .4s;
    }
    .bottom-up.loading .l.l1 {
        animation-delay: .5s;
    }

    /* loading-l LEFT-RIGHT left-right */
    .left-right.loading .l.l7 {
        animation-delay: .1s;
    }
    .left-right.loading .l.l4,
    .left-right.loading .l.l8 {
        animation-delay: .2s;
    }
    .left-right.loading .l.l1,
    .left-right.loading .l.l9 {
        animation-delay: .3s;
    }
    .left-right.loading .l.l2,
    .left-right.loading .l.l6 {
        animation-delay: .4s;
    }
    .left-right.loading .l.l3 {
        animation-delay: .5s;
    }

    /* CHASE chase */
    .chase.loading .l.l1 {
        animation-delay: 0s;
    }
    .chase.loading .l.l2 {
        animation-delay: 0.25s;
    }
    .chase.loading .l.l3 {
        animation-delay: 0.5s;
    }
    .chase.loading .l.l6 {
        animation-delay: 0.75s;
    }
    .chase.loading .l.l9 {
        animation-delay: 1s;
    }
    .chase.loading .l.l8 {
        animation-delay: 1.25s;
    }
    .chase.loading .l.l7 {
        animation-delay: 1.5s;
    }
    .chase.loading .l.l4 {
        animation-delay: 1.75s;
    }


    .loading .l.l1,
    .loading .l.l2,
    .loading .l.l3,
    .loading .l.l4 {
        background-color: var(--second);
    } 

    .loading .l.l6,
    .loading .l.l7,
    .loading .l.l8,
    .loading .l.l9 {
        background-color: var(--prime);
    } 

    .loading .l.l1,
    .loading .l.l2,
    .loading .l.l3 {
        top: 0;
    }

    .loading .l.l4,
    .loading .l.l5,
    .loading .l.l6 {
        top: 33.3%;
    }

    .loading .l.l7,
    .loading .l.l8,
    .loading .l.l9 {
        top: 66.6%;
    }

    .loading .l.l1,
    .loading .l.l4,
    .loading .l.l7 {
        left: 0;
    }

    .loading .l.l2,
    .loading .l.l5,
    .loading .l.l8 {
        left: 33.3%;
    }

    .loading .l.l3,
    .loading .l.l6,
    .loading .l.l9 {
        left: 66.6%;
    }

    .loading .l.l5 {
        display: none;
    }

    @keyframes loading-l {
        0% { transform: scale(.85, .85) }
        25% { transform: scale(.05, .05) }
        50% { transform: scale(.85, .85) }
    }

    @keyframes chase {
        0% {
            transform: scale(.90);
            animation-timing-function: linear;
        }
        
        12.5% {
            transform: scale(1);
            animation-timing-function: linear;
            opacity: 1;
        }
        
        25% {
            transform: scale(.90);
            animation-timing-function: linear;
        }
    }

    @keyframes build {
        0% {
            transform: translateY(1rem);
            opacity: .25
        }
        12.5% {
            transform: translateY(0, 0);
            opacity: 1
        }
        25% {
            transform: translateY(-1rem);
            opacity: .25
        }
    }
</style>

{#if loading}
    {#if !inline}

    <div class="{style} loading" transition:fade={{duration: 300}}>
        <span class="l l1"></span>
        <span class="l l2"></span>
        <span class="l l3"></span>
        <span class="l l4"></span>
        <span class="l l5"></span>
        <span class="l l6"></span>
        <span class="l l7"></span>
        <span class="l l8"></span>
        <span class="l l9"></span>
    </div>
    <Backdrop z={30} />
    {:else}
    <div class="inline {style} loading" transition:fade|local={{duration: 300}}>
        <span class="l l1"></span>
        <span class="l l2"></span>
        <span class="l l3"></span>
        <span class="l l4"></span>
        <span class="l l5"></span>
        <span class="l l6"></span>
        <span class="l l7"></span>
        <span class="l l8"></span>
        <span class="l l9"></span>
    </div>
    {/if}
{/if}


<script lang="ts">
    import { onMount, tick } from 'svelte'
    export let tabs = ["Start", "List", "Rank", "Result"]
    export let active = tabs[0].toLowerCase()

    let indicatorWidth 
    let indicatorLeft
    let tabsEl
    let activeTabEl


    onMount(async () => {
        await tick()
        activeTabEl = tabsEl.querySelector(`.tab-${active}`)
        indicatorLeft = activeTabEl.offsetLeft + 'px'
        indicatorWidth = activeTabEl.offsetWidth + 'px'
    })

    const setActive = (e) => {
        const target = e.target
        indicatorLeft = target.offsetLeft + 'px'
        indicatorWidth = target.offsetWidth + 'px'
        active = target.innerHTML.toLowerCase()
    }


</script>

<style>
    .step-nav-wrapper {
        display: flex;
        justify-content: center;
        margin-block-start: 1rem;
    }

    nav {
        --width: 50rem;
        position: relative;
        width: var(--width);
        height: 5rem;
        background: var(--prime);
        border-radius: 8px;
        font-size: 0;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,0.5);
    }

    nav span {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
        line-height: 5rem;
        position: relative;
        z-index: 1;
        display: inline-block;
        text-align: center;
        width: calc( var(--width) / var(--tabs-num))
    }

    nav .indicator {
        position: absolute;
        height: .5rem;
        bottom: 0;
        z-index: 0;
        background: #fff;
        border-radius: 8px;
        transition: all .5s ease 0s;
    }

    .disabled {
        color: var(--color-grey-dark-3);
        cursor:default;
    }

    @media only screen and (max-width: 550px) {
        nav {
            width: 98%;
        }

        nav .indicator {
            position: absolute;
            height: .3rem;
        }

    }



</style>


<div class="step-nav-wrapper">
    <nav bind:this={tabsEl} style="--tabs-num: {tabs.length}">
        {#each tabs as tab} 
        <span class="tab tab-{tab.toLowerCase()}" class:active={active === tab.toLowerCase()} on:click={setActive}>{tab}</span>
        {/each}
        <div class="indicator" style="left: {indicatorLeft}; width: {indicatorWidth};"></div>
    </nav>
</div>


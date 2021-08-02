<script>
    import { onMount, tick, afterUpdate } from 'svelte'
    export let tabs = ['Home', 'Here', 'There', 'Everywhere']
    export let size = 'max' // max or min
    export let active = tabs[0].toLowerCase()

    let windowWidth
    let indicatorWidth 
    let indicatorLeft
    let tabsEl
    let activeTab


    onMount(async () => {
        await tick()
        activeTab = tabsEl.querySelector(`.tab-${active}`)
        indicatorLeft = activeTab.offsetLeft + 'px'
        indicatorWidth = activeTab.offsetWidth + 'px'
    })

    $: {
        if(windowWidth > 800 && windowWidth < 1000) {
            activeTab = tabsEl.querySelector(`.tab-${active}`)
            indicatorLeft = activeTab.offsetLeft + 'px'
            indicatorWidth = activeTab.offsetWidth + 'px'
        }
    }

    const setActive = (e) => {
        const target = e.target
        indicatorLeft = target.offsetLeft + 'px'
        indicatorWidth = target.offsetWidth + 'px'
        active = target.innerHTML.toLowerCase()
    }

</script>

<svelte:window bind:innerWidth={windowWidth}/>

<div class="tab-bar" >
    <div class="tabs size-{size}" bind:this={tabsEl}>
        {#if indicatorWidth}
        <div class="indicator" style="left: {indicatorLeft}; width: {indicatorWidth};"></div>
        {/if}
        {#each tabs as tab, i}
            <div class="tab tab-{tab.toLowerCase()}" class:active={active === tab.toLowerCase()} on:click={setActive}>{tab}</div>
        {/each}
    </div>
</div>

<style>
    .tab-bar {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        
    }

    /* .tabs.size-max {
        justify-content: space-around;
    } */

    .tabs {
        display: flex;
        position: relative;
    }


    .tab {
        padding: 1rem 3rem;
        margin: 0 2rem;
        cursor: pointer;
        position: relative;
        /* font-size: 1.8rem; */
        /* margin: 0 auto; */
    }

    .tabs > .indicator {
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: var(--flash);
        width: 0;
        height: 3px;
        transition: 0.4s;
    }

    /* .tabs > .indicator:before {
    	position: absolute;
        content: "";
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%) rotate(-45deg);
        border: 5px solid var(--flash);
        border-left-color: transparent;
        border-bottom-color: transparent; 
    } */

</style>
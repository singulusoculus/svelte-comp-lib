<script>

    export let tabs = ['Home', 'Here', 'There']
    export let size = 'min' // or min

</script>

<div class="tab-bar size-{size}" >
    {#each tabs as tab}
        <div class="tab">{tab}</div>
    {/each}
</div>

<style>
    .tab-bar {
        display: flex;
        
    }

    .tab-bar.size-max {
        justify-content: space-around;
    }



    .tab {
        padding: 1rem 3rem;
    }

</style>
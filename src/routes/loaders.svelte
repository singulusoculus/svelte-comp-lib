<script>
    import LoadingDiamond from '$lib/ui/LoadingDiamond.svelte'
    import LoadingElipses from '$lib/ui/LoadingElipses.svelte'
    import LoadingSquares from '$lib/ui/LoadingSquares.svelte'
    import LoadingBall from '$lib/ui/LoadingBall.svelte'
</script>

<div>
    <h2>Loaders</h2>
    <div class="loaders">
        <LoadingDiamond loading={true} style="top-down" inline={true}/>
        <LoadingDiamond loading={true} style="chase" inline={true}/>
        <LoadingDiamond loading={true} style="left-right" inline={true}/>
        <LoadingDiamond loading={true} style="bottom-up" inline={true}/>
    </div>
    <div class="loaders">
        <LoadingElipses />
        <LoadingSquares loading={true} inline={true} />
        <LoadingBall />
    </div>

</div>

<style>
    .loaders {
        display: flex;
        justify-content: space-around;
        margin-top: 5rem;
    }
</style>
<script>
    import LoadingDiamond from '$lib/ui/LoadingDiamond.svelte'
    import LoadingElipses from '$lib/ui/LoadingElipses.svelte'
    import LoadingSquares from '$lib/ui/LoadingSquares.svelte'
    import LoadingBall from '$lib/ui/LoadingBall.svelte'
    import ProgressIndicator from '$lib/ui/ProgressIndicator.svelte'
    import TextField from '$lib/ui/TextField.svelte'
    let progress = 52
</script>


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

<h2>Progress Indicator</h2>
<ProgressIndicator bind:progress={progress} />
<div class="progress-input">
    <TextField inputType="number" label="Input Progress %" bind:text={progress} />
</div>


<style>
    h2 {
        margin: 2rem 0 1rem 0;
    }
    
    .loaders {
        display: flex;
        justify-content: space-around;
        margin-top: 5rem;
    }
</style>
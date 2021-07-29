<script>
    import ProgressIndicator from '$lib/ui/ProgressIndicator.svelte'
    import TextField from '$lib/ui/TextField.svelte'
    let progress = 52
</script>

<h2>Progress Indicator</h2>
<ProgressIndicator bind:progress={progress} />
<div class="progress-input">
    <!-- <TextInput id="progress-input" inputType="number" label="Input Progress %" bind:text={progress} /> -->
    <TextField inputType="number" label="Input Progress %" bind:text={progress} />
</div>

<style>
    .progress-input {
        width: 25%;
    }
</style>
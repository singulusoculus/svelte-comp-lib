<script>
    export let progress = 0

    $: progress = progress > 100 ? 100 : progress
</script>

<div class="wrapper">
    <div class="text">{progress}%</div>
    <div class="bar-wrapper">
        <div class="base"></div>
        <div class="progress" style="width: {progress}%"></div>
    </div>
</div>

<style>
    .bar-wrapper {
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 30px
    }

    .text {
        margin-bottom: 8px;
    }

    .base {
        width: 100%;
        height: 4px;
        background-color: var(--back-3);
    }

    .progress {
        height: 12px ;
        background-color: var(--flash);
        position: absolute;
        top: -4px;
        transition: width 400ms;
    }
</style>
<script>
    import Card from '$lib/ui/Card.svelte'
    export let title = "Demo Title"
    export let height = 30

</script>

<div class="demo-wrapper" style="--height: {height}rem">
    <Card>
        <h3>{title}</h3>
        <div class="demo-box">
            <slot></slot>
        </div>
    </Card>
</div>


<style>
    .demo-wrapper {
        overflow: hidden;
        width: 100%;
    }

    .demo-box {
        position: relative;
        padding: 0;
        overflow: hidden;
        border: 1px #000 solid;
        width: 100%;
        height: var(--height);
        /* display: flex; */
        z-index: 0;
        background-color: var(--back);
    }

</style>
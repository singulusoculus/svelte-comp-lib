<script>
    import Card from '$lib/ui/Card.svelte'
    export let title = "Demo Title"
</script>

<div class="demo-wrapper">
    <Card>
        <h3>{title}</h3>
        <div class="demo-box">
            <slot><!-- optional fallback --></slot>
        </div>
    </Card>
</div>


<style>
    .demo-wrapper {
        overflow: none;
        /* height: 100%;
        min-height: 30rem; */
    }

    .demo-box {
        position: relative;
        padding: 0;
        margin: 2rem;
        overflow: hidden;
        border: 1px #000 solid;
        width: 90%;
        height: 30rem;
        display: flex;
    }
</style>
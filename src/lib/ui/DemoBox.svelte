<script>
    import Card from '$lib/ui/Card.svelte'
    export let title = "Demo Title"

</script>

<div class="demo-wrapper">
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
        height: 30rem;
        display: flex;
    }

</style>
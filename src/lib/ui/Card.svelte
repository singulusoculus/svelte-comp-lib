<script>
    export let width = 95
</script>

<div class="card" style="--card-width: {width}%">
        <slot></slot>
</div>

<style>
    .card {
        background: var(--back-2);
        padding: 2rem;
        margin: 1rem auto;
        border-radius: 3px;
        /* box-shadow: 0px 2px 4px rgba(0,0,0,0.1); */
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.2);
        width: var(--card-width);
    }
</style>
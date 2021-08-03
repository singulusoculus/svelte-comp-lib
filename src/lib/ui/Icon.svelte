<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let name;
    export let size = 20;
    // export let color

    const clickedIcon = (e) => {
        const clickedIcon = e.path[0].children[0].attributes["xlink:href"].value.substring(1)
        dispatch("clicked", {clickedIcon})
    }
</script>

<svg class="icon" width={size} height={size} on:click={(e) => {dispatch("clicked", {event: e})}}>
    <use xlink:href='#{name}' />
</svg>


<style>
    .icon {
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        -o-object-fit: contain;
        object-fit: contain;
        -webkit-transform-origin: center center;
        transform-origin: center center;
        stroke: currentColor;
        stroke-width: 1.3;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
    }
</style>
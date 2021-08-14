<script>
    // I want to bring the transition into the component to avoid a wrapping div - how can I do this?

    import { fade, fly, blur, slide, scale, draw } from 'svelte/transition';
    import {onMount} from 'svelte';

    export let top = 0;
    export let bottom = 0;
    export let left = 0;
    export let right = 0;
    export let steps = 100;
    export let height = 'unset'
    export let threshold = undefined
    export let once = true 
    
    export let inTrans = undefined
    export let inOptions = {}

    let inTransFunc = undefined
    let element;
    let percent;
    let observer;
    let unobserve = () => {};
    let intersectionObserverSupport = false;
    let visible = false

    $: visible = !intersectionObserverSupport || percent >= threshold;
	$: if (intersectionObserverSupport && visible && once) unobserve();

    if (inTrans === 'fly') {
        inTransFunc = fly
    } else if (inTrans === 'fade') {
        inTransFunc = fade
    } else if (inTrans === 'blur') {
        inTransFunc = blur
    } else if (inTrans === 'slide') {
        inTransFunc = slide
    } else if (inTrans === 'scale') {
        inTransFunc = scale
    } else if (inTrans === 'draw') {
        inTransFunc = draw
    }

    function intersectPercent(entries) {
        entries.forEach(entry => {
            percent = Math.round(Math.ceil(entry.intersectionRatio * 100));
        })
    }

    function stepsToThreshold(steps) {
        return [...Array(steps).keys()].map(n => n / steps)
    }

    onMount(() => {
        intersectionObserverSupport =
                'IntersectionObserver' in window &&
                'IntersectionObserverEntry' in window &&
                'intersectionRatio' in window.IntersectionObserverEntry.prototype;

        const options = {
            rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
            threshold: stepsToThreshold(steps)
        };

        if (intersectionObserverSupport) {
            observer = new IntersectionObserver(intersectPercent, options);
            observer.observe(element);
            unobserve = () => observer.unobserve(element);
        }

        return unobserve;
    });
</script>

<div bind:this={element} style="--height: {height}">
    {#if visible}
    <div in:inTransFunc={inOptions}>
        <slot {percent} {unobserve} {intersectionObserverSupport} {visible}/>
    </div>
    {/if}
</div>

<style>
    div {
        height: var(--height)
    }
</style>
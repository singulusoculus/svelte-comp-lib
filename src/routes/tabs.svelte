<script>
    import { fade, fly } from 'svelte/transition'
    import TabBar from '$lib/ui/TabBar.svelte'
    import Card from '$lib/ui/Card.svelte'
    import Buttons from '../routes/buttons.svelte'

    let tabs = ['Home', 'Here', 'Somewhere', 'Everywhere']
    let active = 'somewhere'
</script>
<h2>Tabs</h2>

<TabBar {tabs} bind:active={active}/>

{#if active === 'home'}
<div class="" out:fade|local="{{ duration:400 }}" in:fly="{{ delay: 500, duration:600, y: 50, opacity: 0 }}">
    <Card><Buttons /></Card>
</div>
{:else if active === 'here'}
<div class="" out:fade|local="{{ duration:400 }}" in:fly="{{ delay: 500, duration:600, y: 50, opacity: 0 }}">
    <Card>HERE</Card>
</div>
{:else if active === 'somewhere'}
<div class="" out:fade|local="{{ duration:400 }}" in:fly="{{ delay: 500, duration:600, y: 50, opacity: 0 }}">
    <Card>SOMEWHERE</Card>
</div>
{:else if active === 'everywhere'}
<div class="" out:fade|local="{{ duration:400 }}" in:fly="{{ delay: 500, duration:600, y: 50, opacity: 0 }}">
    <Card>ANYWHERE</Card>
</div>
{/if}

<style>
    h2 {
        margin: 2rem 0 1rem 0;
    }

</style>
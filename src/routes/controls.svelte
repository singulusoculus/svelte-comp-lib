<script>
    import Switch from '$lib/ui/Switch.svelte'
    import Toggle from '$lib/ui/Toggle.svelte'
    import Checkbox from '$lib/ui/Checkbox.svelte'
    import RadioButtons from '$lib/ui/RadioButtons.svelte'
    import Range from '$lib/ui/Range.svelte'
</script>

<h2>Switches / Toggles</h2>
<div class="items">
    <Switch title="With Labels" offLabel="No" onLabel="Yes" />
    <Switch title="No Labels" />
    <Switch />
    <Toggle />
</div>

<h2>Checkboxes</h2>
<Checkbox cbClass="custom-class" title="Test" on:clicked={(e) => {console.log(e.detail)}} />
<Checkbox  on:clicked={(e) => {console.log(e.detail)}} />


<h2>Radio Buttons</h2>
<RadioButtons />

<h2>Range</h2>
<Range />

<style>

    h2 {
        margin: 2rem 0 1rem 0;
    }

    .items {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
    }
</style>
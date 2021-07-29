<script>
    import Button from '$lib/ui/Button.svelte'
</script>

<h2>Buttons</h2>
<p>Button colors are based on colors defined in global.css</p>
<div class="items">
    <Button text="With Icon" disabled={false} icon="grid" />
    <Button text="No Icon" disabled={false} />
    <Button text="Disabled" disabled={true} />
    <Button text="As a Link" linkref='https://pubmeeple.com' disabled={false} icon="external-link" />
    <Button text="Loaders" linkref='/loaders' disabled={false} />
    <Button fab={true} icon="list" />
</div>

<style>
    .items {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
    }
</style>
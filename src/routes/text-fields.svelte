<script>
    import TextField from '$lib/ui/TextField.svelte'
</script>

<h2>Text Input / Text Area</h2>
<TextField label="Test" placeholder="Placeholder Text"/>
<TextField label="Search" prependIcon="search" on:textChange={(e) => console.log(e.detail)}/>
<TextField label="Search" appendIcon="search"/>
<TextField label="Textarea Test" inputType="textarea" rows={10}/>
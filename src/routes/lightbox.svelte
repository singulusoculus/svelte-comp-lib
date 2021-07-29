<script>
    import Lightbox from '$lib/ui/Lightbox.svelte'
</script>

<h2>Lightbox</h2>
<div class="image">
    <Lightbox imageSrc="/img/headshot.jpg" imageDesc="Headshot" />
</div>

<style>
    h2 {
        margin: 2rem 0 1rem 0;
    }

    .image {
        width: 250px;
        margin: 0 auto;
    }
</style>
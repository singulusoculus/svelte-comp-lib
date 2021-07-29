<script>
    import Card from '$lib/ui/Card.svelte'
</script>

<h2>Cards</h2>
<div class="cards">
    <Card width={40}>
        <p>Cards are simply wrapper elements. Any internal styling and positioning needs to be done to the content inside it. Only the width of a card can be assigned to the component in %.</p>
    </Card>
    <Card width={40}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga reprehenderit recusandae alias fugit natus mollitia a quasi libero numquam ea laborum explicabo velit culpa, architecto impedit ipsum voluptas adipisci odit.</p>
    </Card>
</div>
<Card>
    <h3>Heading</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga reprehenderit recusandae alias fugit natus mollitia a quasi libero numquam ea laborum explicabo velit culpa, architecto impedit ipsum voluptas adipisci odit.</p>
</Card>

<style>
    h2 {
        margin: 2rem 0 1rem 0;
    }

    .cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>
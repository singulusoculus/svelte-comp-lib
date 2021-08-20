<script>
    import Visiload from '$lib/ui/Visiload.svelte'
    import Card from '$lib/ui/Card.svelte'
    import Icon from '$lib/ui/Icon.svelte'
</script>

<h2>Visiload</h2>
<p>This is a wrapper component that watches the viewport and transitions the wrapped element in the viewport using the specified transition</p>

<Visiload threshold={70} inTrans='fly' inOptions={{x:-500, duration:1500, delay:100}}>
    <Card>
        <h1>From left</h1>
    </Card>
</Visiload>


<Visiload threshold={70} inTrans='fly' inOptions={{x:500, duration:1000}}>
    <Card>
        <h1>From right</h1>
    </Card>
</Visiload>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, rem quasi a nihil ducimus, esse expedita neque ratione facilis optio vero enim non atque adipisci sunt quidem dolores eius. Dolor.</p>

<Visiload threshold={20} inTrans='fade' inOptions={{duration:1000}}>
    <Card>
        <h1>Fade in</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, blanditiis rerum accusamus assumenda quo voluptatum praesentium fuga enim, accusantium commodi sapiente asperiores nesciunt? Quasi unde iusto placeat quaerat aut?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, blanditiis rerum accusamus assumenda quo voluptatum praesentium fuga enim, accusantium commodi sapiente asperiores nesciunt? Quasi unde iusto placeat quaerat aut?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, blanditiis rerum accusamus assumenda quo voluptatum praesentium fuga enim, accusantium commodi sapiente asperiores nesciunt? Quasi unde iusto placeat quaerat aut?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, blanditiis rerum accusamus assumenda quo voluptatum praesentium fuga enim, accusantium commodi sapiente asperiores nesciunt? Quasi unde iusto placeat quaerat aut?</p>
    
    </Card>
</Visiload>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, blanditiis rerum accusamus assumenda quo voluptatum praesentium fuga enim, accusantium commodi sapiente asperiores nesciunt? Quasi unde iusto placeat quaerat aut?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, blanditiis rerum accusamus assumenda quo voluptatum praesentium fuga enim, accusantium commodi sapiente asperiores nesciunt? Quasi unde iusto placeat quaerat aut?</p>

<Visiload threshold={50} height="30rem" inTrans='scale' inOptions={{duration: 1000, delay: 100, opacity: 0.5, start: 0.3}}>
<img alt="BC Logo"
    src="logo.png">
</Visiload>

<Visiload threshold={50} height='10rem' inTrans='blur' inOptions={{duration: 1500}}>
<Icon name='mail' size={100} />
</Visiload>

<style>
    h2 {
        margin: 2rem 0 1rem 0;
    }
    img {
        height: 300px;
        width: 300px;
    }
</style>
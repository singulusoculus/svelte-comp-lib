<script>
    export let drawerVisible;

</script>

<style>
	.menu {
		list-style-type: none;
	}

    .menu > li {
        line-height: 4.8rem;
        margin-left : 1.5rem;
        font-size: 2rem;
    }

    .menu > li > a {
        color: var(--text);
        z-index: 40;
        text-decoration: none;
    }

    .drawer {
        transform: translateX(-100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--back-3);
        min-width: 350px;
        position: absolute;
        left: 0;
        top: 0;  
        height: 105%;   
        z-index: 40;
        padding: 2rem 2rem 0 5rem;
        transition: all .6s ease-in-out;
        overflow: visible;
    }

    .drawer.drawer-menu {
        align-items: flex-end;
    }

    .drawer.open {
        transform: translateX(0%);
    }
    
    @media only screen and (max-width: 960px) {
        .drawer {
            height: 33rem;
            min-height: 100%;
            min-width: 100%;
            margin-top: 4rem;
            transform: translateY(0);
            border-radius: 3px;
            padding: 4rem 0 0 0;
        }

        .drawer.drawer-menu {
            align-items: center;
        }

        .drawer.open {
            transform: translateY(-30rem);
        }
    }

</style>

<div class="drawer drawer-menu" class:open={drawerVisible === "menu"}>
    <ul class="menu">
        <li><a href="https://www.pubmeeple.com" target="_blank" rel="noopener">Pub Meeple Home</a></li>
        <li><a href="https://topnine.pubmeeple.com" target="_blank" rel="noopener">Top Nine Generator</a></li>
        <li><a href="https://www.pubmeeple.com/pub-meeple-podcast" target="_blank" rel="noopener">Podcast</a></li>
        <li><a href="https://www.pubmeeple.com/contact" target="_blank" rel="noopener">Contact</a></li>
    </ul>
</div>

<div class="drawer" class:open={drawerVisible === 'account'}>
    <h2>Account</h2>
</div>

<div class="drawer" class:open={drawerVisible === 'help'}>
    <h2>Help</h2>
</div>



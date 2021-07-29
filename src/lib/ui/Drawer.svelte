<script>
    import { fly, fade } from 'svelte/transition'
    import { page } from '$app/stores';
    import Icon from '$lib/ui/Icon.svelte'
    import Backdrop from '$lib/ui/Backdrop.svelte'

    export let drawerVisible = false
    export let persist = false
    export let side = 'right'
    let flyX = side === 'right' ? 300 : -300
    export let navItems = [
		{
			name: 'Home',
			href: '.'
        },
    ]

    const toggleDrawer = () => {
        drawerVisible = !drawerVisible
    }

</script>

{#if drawerVisible}
<ul class="drawer" class:right={side === 'right'} class:left={side === 'left'} transition:fly={{x: flyX, duration: 300}}>
    <!-- {#if !persist}
    <span class="close" class:right={side === 'right'} class:left={side === 'left'} on:click={toggleDrawer}><Icon name="close" size={36} /></span>
    {/if} -->
    {#each navItems as navItem}
    <li class="nav-item" on:click={toggleDrawer} aria-current="{$page.path === navItem.href ? 'page' : undefined}">
        <a href={navItem.href}>{navItem.name}</a>
    </li>
    {/each}
</ul>
<Backdrop on:clicked={toggleDrawer} {persist} />
{/if}

<style>
    .drawer {
        transform: translateX(0%);
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        background-color: #FFF;
        width: var(--side-nav);
        position: fixed;
        top: 0;  
        height: 105%;   
        z-index: 400;
        list-style-type: none;
        padding: 2rem 2rem 0 0;
    }

    .drawer.right {
        right: 0;
    }

    .drawer.left {
        left: 0; 
    }

    .drawer > li {
        line-height: 4.8rem;
        margin-left : 1.5rem;
        font-size: 2rem;
    }

    .drawer > li:hover,
    .drawer > li[aria-current] {
        color: var(--flash);
    }

    a:visited {
        color: inherit;
    }

    /* .close {
        position: absolute;
        right: 2rem;
        top: 1rem;
        cursor: pointer;
    }

    .close.left {
        left: 2rem;
    }

    .close.right {
        right: 2rem;
    }

    .close:hover {
        color: var(--flash);
    } */
</style>
<script>
    import { page } from '$app/stores'
    import { fly, fade } from 'svelte/transition'
    import Icon from '$lib/ui/Icon.svelte'

    let open
    let windowWidth
    let mode
    let userClosed = false

    $: windowWidth > 900 && !userClosed  ? open = true : open = false
    $: windowWidth > 900 ? mode = "fixed" : mode= "drawer"

    const toggleOpen = () => {
        if (mode === 'fixed') {
            userClosed = !userClosed
        } 
        open = !open
    }

    export let navItems = [
		{
			name: 'Home',
			href: '/'
        },
        {
            name: 'Loaders',
            href: '/loaders'
        },
    ]
</script>

<svelte:window bind:innerWidth={windowWidth}/>

{#if windowWidth}
<nav class="sidenav" class:open={open}>
    <div class="nav-items-wrapper">
        {#if open}
        <div class="nav-items" transition:fly|local={{x: -300, duration: 600, delay: 100}}>
            {#each navItems as navItem}
                <a href={navItem.href} aria-current="{$page.path === navItem.href ? 'page' : undefined}" on:click="{mode === "drawer" ? toggleOpen : null}">{navItem.name}</a>
            {/each}
        </div>
        {/if}
        <div class="icon" on:click|stopPropagation={toggleOpen}>
            {#if open}
            <Icon name="chevrons-left" size={24} />
            {:else}
            <Icon name="chevrons-right" size={24} />
            {/if}
        </div>
    </div>
    {#if !open}
    <div class="click-target" on:click={toggleOpen}></div>
    {/if}
</nav>
{/if}

{#if open}
<div class="backdrop" transition:fade={{duration: 300, delay: 100}} on:click={toggleOpen}></div>
{/if}


<style lang="scss">

    nav {
        display: flex;
        background-color: #ebe8e8;
        width: 5rem;
        height: 100%;
        padding: 2rem 2rem 0 2rem;
        transition: width .4s ease-in-out;
    }

    nav.open {
        width: var(--side-nav);
    }

    .nav-items-wrapper {
        align-self: flex-start;
        position: sticky;
        top: 8rem;
        width: 100%;

    }

    .nav-items {
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    a {
        font-size: 1.6rem;
        margin: .5rem 0
    }

    a:visited {
        color: inherit;
    }

    a:hover {
        color: var(--flash);
    }

    a[aria-current] {
        color: var(--flash);
    }

    .icon {
        top: 1rem;
        right: -1rem;
        position: absolute;
        cursor: pointer;
        transition: transform .4s;
    }

    .icon:hover {
        color: var(--flash);
    }

    .click-target {
        position: absolute;
        left: 0;
        top: 0;
        width: 5rem;
        height: 100%;
        cursor: pointer;
    }

    @media only screen and (max-width: 900px) {
        nav {
            position: absolute;
            left: -25rem;
            transition: left .4s ease-in-out;
            width: var(--side-nav);
            z-index: 400;
        }

        .backdrop {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100vw;
            background-color:  rgba(0,0,0,0.25);
            z-index:395;
        }

        nav.open {
            left: 0;
        }

        .click-target {
            right: 0;
            left: unset;
        }
    }
</style>
<script>
    import Icon from '$lib/ui/Icon.svelte'
    import Drawer from '$lib/ui/Drawer.svelte'

    export let hasMobileNav = true
    export let navItems = [
        {
			name: '',
            icon: 'home',
			href: '/',
            component: ''
        },
		{
			name: '',
            icon: 'github',
			href: 'https://github.com/singulusoculus/svelte-comp-lib',
            component: ''
        },
    ]

    let mobileNavVisible = false

    const toggleMobileNav = () => {
        mobileNavVisible = !mobileNavVisible
    }
</script>

<nav class:has-mobile-nav={hasMobileNav}>
    <ul>
        {#each navItems as navItem}
        <li class="nav-item">
            {#if !navItem.component}
            <a href={navItem.href}>

                {#if navItem.name}
                {navItem.name}
                {/if}

                {#if navItem.icon}
                <Icon name={navItem.icon} size={28}/>
                {/if}
            </a>
            {:else}
            <svelte:component this={navItem.component}/>
            {/if}
        </li>
        {/each}
    </ul>
</nav>


{#if hasMobileNav}
<div class="menu-btn" on:click={toggleMobileNav}>
    <Icon name="menu" size={28}/>
</div>
<Drawer {navItems} bind:drawerVisible={mobileNavVisible} />
{/if}



<style>
    ul {
        list-style: none;
		position: relative;
		padding: 0 3rem 0 0;
        display: flex;
        align-items: center;
		justify-content: space-between;
        font-family: var(--font);
		margin: 0;
		line-height: 1;
    }
    
    li {
        margin: 0 1rem;
        cursor: pointer;
        font-size: 1.6rem;
    }

    li > a {
        cursor: pointer;
    }

    li > a:hover {
        color: var(--flash);
    }

    a:visited {
        color: inherit;
    }

    .menu-btn {
        color: var(--text);
        position: absolute;
        right: 2rem;
        display: none;
        cursor: pointer;
    }

    .menu-btn:hover {
        color: var(--flash);
    }

    @media only screen and (max-width: 768px) {
        nav.has-mobile-nav {
            display: none;
        }

        .menu-btn {
            display: inline-block;
        }

        /* nav {
            display: flex;
            justify-content: center;
            align-items: center;
        } */
    }
</style>
<script>
    import '$lib/global.scss';
    import Header from '$lib/layout/Header.svelte'
    import Footer from '$lib/layout/Footer.svelte'
    import Content from '$lib/layout/Content.svelte'
    import Icons from '$lib/ui/Icons.svelte'
    import SideNav from '$lib/layout/SideNav.svelte';
    import Nav from '$lib/ui/Nav.svelte';

    export let sideNavItems = [
		{
			name: 'Home',
			href: '/'
        },
        {
            name: 'Buttons',
            href: '/buttons'
        },
        {
            name: 'Text Fields',
            href: '/text-fields'
        },
        {
            name: 'Loaders',
            href: '/loaders'
        },
        {
            name: 'Controls',
            href: '/controls'
        },
        {
            name: 'Collapsible',
            href: '/collapsible'
        },
        {
            name: 'Cards',
            href: '/card'
        },
        {
            name: 'Progress Indicator',
            href: '/progress'
        },
        {
            name: 'Lightbox',
            href: '/lightbox'
        },
        {
            name: 'Divider',
            href: '/divider'
        },
        {
            name: 'Tabs',
            href: '/tabs'
        },
    ]

</script>
<div class="page-wrapper">
        <div class="header">
            <Header disappearOnScroll={false}>
                <Nav hasMobileNav={false} />
            </Header>
        </div>
        
        <div class="sidebar">
            <SideNav navItems={sideNavItems} />
        </div>
    
        <div class="main">
            <Content>
                <slot></slot>
            </Content>
        </div>

        <div class="foot">
            <Footer />
        </div>

</div>

<Icons />

<style>
    .page-wrapper {
        display: grid;
		grid-template: 
			"head    head   head   head"   var(--nav-h)
			"sidebar  .    main      ."    1fr
			"foot    foot   foot    foot"  var(--foot-h) /
			1fr      2rem    15fr     2rem;
		min-height: 100vh;
    }

    .header {
        grid-area: head;
    }

    .sidebar {
        grid-area: sidebar;
        position: relative
    }

    .main {
        grid-area: main;
    }

    .foot {
        grid-area: foot;
    }

</style>
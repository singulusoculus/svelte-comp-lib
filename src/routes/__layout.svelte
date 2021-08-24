<script>
    import '$lib/global.scss';
    import Header from '$lib/layout/Header.svelte'
    import Footer from '$lib/layout/Footer.svelte'
    import Content from '$lib/layout/Content.svelte'
    import Icons from '$lib/ui/Icons.svelte'
    import SideNav from '$lib/layout/SideNav.svelte';
    import Nav from '$lib/ui/Nav.svelte';
    import DarkModeToggle from '$lib/ui/DarkModeToggle.svelte';

    let sideNavItems = [
		{
			name: 'Home',
			href: '/'
        },
        {
            name: 'Buttons',
            href: '/buttons'
        },
        {
            name: 'Cards',
            href: '/card'
        },
        {
            name: 'Collapsible',
            href: '/collapsible'
        },
        {
            name: 'Controls',
            href: '/controls'
        },
        {
            name: 'Data Table',
            href: '/datatable'
        },
        {
            name: 'Divider',
            href: '/divider'
        },
        {
            name: 'Lightbox',
            href: '/lightbox'
        },
        {
            name: 'Loaders and Progress',
            href: '/loaders-progress'
        },
        {
            name: 'Navigation',
            href: '/navigation'
        },
        {
            name: 'Tabs',
            href: '/tabs'
        },
        {
            name: 'Text Fields',
            href: '/text-fields'
        },
        {
            name: 'Visiload',
            href: '/visiload'
        },
    ]

    let navItems = [
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
		{
			name: '',
            icon: '',
			href: '',
            component: DarkModeToggle
        },
    ]

</script>
<div class="page-wrapper">
        <div class="header">
            <Header disappearOnScroll={false} title="SvelteCompLib">
                <Nav hasMobileNav={false} {navItems} />
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
        position: relative;
        z-index: 20;
    }

    .sidebar {
        grid-area: sidebar;
        position: sticky;
        top: 6rem;
        align-self: flex-start;
        height: 100vh;
        z-index: 10;
    }

    .main {
        grid-area: main;
        z-index: 0;
    }

    .foot {
        grid-area: foot;
        z-index: 20;
    }

</style>
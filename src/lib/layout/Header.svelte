<script>
    export let disappearOnScroll = false
    export let title = "Demo"

    let visible = true
    let lastScroll = 0

    function handleScroll() {
        const scroll = window.pageYOffset;
        if (disappearOnScroll) {
            visible = (scroll < 50 || scroll < lastScroll);
        }
        lastScroll = scroll;
    }
    
</script>

<svelte:window on:scroll={handleScroll} />

<div class="header-wrapper" class:visible="{visible}">
    <header>
        <a href="." class="branding" alt="branding - go home link">
            <img src="logo.png" alt="logo">
            <h1>{title}</h1>
        </a>
        <slot></slot>
    </header>
</div>

<style lang="scss">
    .header-wrapper {
        position: fixed;
        top: 0;
        left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: var(--nav-h);
		margin: 0 auto;
		background-color: var(--back-3);
		box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,0.5);
		font-family: var(--font);
		user-select: none;
		transform: translate(0,calc(-100% - 1rem));
		transition: transform 0.2s;

        &.visible {
            transform: none;
        }
	}
    
    header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: var(--nav-h);
		padding: 0 0 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: transparent;
		transform: none;
		transition: none;
		box-shadow: none;
	}

    img {
        height: 5rem;
        left: 10px
    }

    .branding {
        display: flex;
        align-items: center;
    }

    .branding > h1 {
        margin-left: 1rem;
    }
</style>
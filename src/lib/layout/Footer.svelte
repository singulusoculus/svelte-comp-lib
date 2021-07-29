<script>
    // import Icon from './Icon.svelte'
    export let version = '1.0.0'
</script>

<style>
	footer {
		background-color: var(--prime);
		color: #fff;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: var(--foot-h);
        width: 100vw;
	}

    .footer-nav {
		list-style: none;
		font-family: var(--font);
		margin: 0;
		line-height: 1;
    }
    
	ul {
		position: relative;
        display: flex;
        align-items: center;
		justify-content: space-between;
    }
    
    li {
        margin: 0 1rem;
        cursor: pointer;
        font-size: 1.6rem;
    }

    li > a {
        cursor: pointer;
    }
</style>

	<footer>
		<span>
			© {new Date().getFullYear()} Brian Casey | v{version}
		</span>
        <nav>
            <ul class="footer-nav">
                <li class="nav-item">
                    <a href=".">Item1</a>
                </li>
                <li class="nav-item">
                    <a href=".">Item2</a>
                </li>
                <li class="nav-item">
                    <a href=".">Item3</a>
                </li>
            </ul>
        </nav>
	</footer>
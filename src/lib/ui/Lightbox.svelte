<script>
    import { fade, fly } from 'svelte/transition'
    import Icon from '$lib/ui/Icon.svelte'

    export let imageSrc
    export let imageDesc

    let isActive = false
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    const toggleImage = () => {
            isActive = !isActive
    }

</script>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .wrapper.active {
        z-index: 20;
    }

    .image {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        transition: all .3s;
        /* width: 90%; */
        margin: 1rem 1rem;
        z-index: 10;
        cursor: zoom-in;
    }

    img {
        width: 100%;
    }


    .image:not(.active):hover {
        transform: translateY(-4px);
        box-shadow: 0 3px 9px rgba(0, 0, 0, 0.35);
    }

    .active-image-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: rgba(0, 0, 0, 0.75);
    }

    .active-image {
        z-index: 100;
        width: 80%;
        border-radius: 3px;
    }

    .active-image-wrapper {
        position: relative;
        /* width: 100%; */
        text-align: center;
    }

    span {
        position: absolute;
        top: -36px;
        right: 9%;
        font-size: 3rem;
        color: white;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .active-image {
            width: 95%;
        }

        span {
            right: 3%;
        }

    }

</style>

{#if isActive}
    <div class="active-image-backdrop" on:click={toggleImage} transition:fade|local={{duration: 200}}>
        <div class="active-image-wrapper">
            <img src="{imageSrc}" alt="{imageDesc}" class="active-image" transition:fly={{y: 100, duration: 500, delay: 100}} on:click|stopPropagation="{!isActive ? toggleImage : null}">
            <span aria-hidden="true" on:click|stopPropagation={toggleImage} in:fade|local={{delay: 400, duration: 200}}>
                <Icon name="close" />
            </span>
        </div>
    </div>
{/if}


<div class="wrapper" class:active="{isActive}">
    <div class="image" class:active="{isActive}" on:click|stopPropagation="{!isActive ? toggleImage : null}">
        <img src="{imageSrc}" alt="{imageDesc}">
    </div>
</div>

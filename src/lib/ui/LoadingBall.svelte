

<div class="ball-loading top-nine">
    <i class="ball"></i>
</div>

<style>
    .ball-loading {
    align-items:center;
    display:flex;
    justify-content:center;
    min-height:80px;

}
    @media only screen and (max-width: 600px) {
        .ball-loading {
            min-height: 50px;
        }
    }  

    .ball {
        animation: ball 300ms cubic-bezier(0.7, 0.06, 0.7, 0.4) infinite alternate;
        border-radius: 1em;
        height: 1em;
        position: relative;
        width: 1em;
        background-color: #527A45
    }

    @keyframes ball {
        0%, 10% {
            transform: translateY(-0.25em) scaleX(1);
        }
        100% {
            transform: translateY(0.5em) scaleX(1.1);
        }
    }
</style>
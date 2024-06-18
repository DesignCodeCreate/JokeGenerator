<script>
    import { List } from "phosphor-svelte";
    import { createEventDispatcher } from "svelte";
    export let menuBox;

    const dispatch = createEventDispatcher();


</script>


<div 
    dir="rtl" class="absolute flex p-4" role="button">
    <h1
        class="text-[#A284B6] text-5xl top-0">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:mouseenter={() => { menuBox = true; }} on:mouseleave={() => { menuBox = false; }}>
                <List />
                {#if menuBox}
                    <div
                        class="box-border select-none outline outline-[#A284B6] p-4 border-4 h-32 w-48 absolute text-center items-center fadeInMenu bg-white  rounded-md text-[#000000] text-xl">
                        <p class="hover:text-[#A234B6]" on:click={() => dispatch('elementClicked', 'Home')}>
                            Home
                        </p>
                        <p class="hover:text-[#A234B6]" on:click={() => dispatch('elementClicked', 'About')}>
                            About Us
                        </p>
                        <p class="hover:text-[#A234B6]" on:click={() => dispatch('elementClicked', 'Contact')}>
                            Contact Us
                        </p>
                    </div>
                {/if}
         </div>
    </h1>
</div>
<script>
    export let showOnPx = 150;
    let hidden = true;
  
    function goTop() {
      document.body.scrollIntoView({ behavior: "smooth" });
    }
  
    function scrollContainer() {
      return document.documentElement || document.body;
    }
  
    function handleOnScroll() {
      if (!scrollContainer()) {
        return;
      }
  
      if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
      } else {
        hidden = true;
      }
    }
  </script>
  
  <style>
    .back-to-top {
      opacity: 1;
      transition: opacity 0.5s, visibility 0.5s;
      position: fixed;
      z-index: 99;
      right: 20px;
      user-select: none;
      bottom: 20px;

    }
  
    .back-to-top.hidden {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  
<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top bg-[#A284B6] block rounded-md bg-[#A284B6] px-3.5 py-2.5 text-center text-sm font-extrabold shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-violet-900" on:click={goTop} class:hidden>Back to top</div>

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

<svelte:window on:scroll={handleOnScroll} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="fixed bottom-5 right-5 opacity-100 z-100 select-none bg-[#A284B6] block rounded-md px-3.5 py-2.5 text-center text-sm font-extrabold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-900" on:click={goTop} class:hidden={hidden}>Back to top</div>

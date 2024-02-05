<script>
	import { onMount } from "svelte";

	let scrollY = 0;
	let parallaxSpeed = 0.04;

	let parallaxSection;
	let parallaxContent;
	let parallaxBottom;
	let parallaxLast;

	export let text = {
		title: "ABOUT US",
		paragraphs: [
			"ALLEGRA offers advice to management and operating partner teams looking to align business models with capital providers. We specialize in bespoke service, working with senior management and boards of directors of companies to assure successful capital-raising that satisfies their long-term objectives. This can mean, in certain instances, constructing networks of affiliated partners to increase the value of a company. But it always centers on practical deal advice that marries our clients with precisely the right capital providers to assure the best match for their corporate culture and capital requirements.",
			"ALLEGRA is actively partnered with capital groups and established buy-side asset managers and works closely with major bulge-bracket banking institutions, offering counsel on myriad business pursuits - embracing everything from capital raising, legal and regulatory guidance to assisting on operational set-up and restructuring in front - to back - office trading capabilities.",
			"ALLEGRA's directors sit on the boards of numerous firms - most notably in the technology and fintech spaces. They also formally advise governments, central banks and capital market associations on trading, technology, data, cybersecurity, regulation and business - and how each inter-connect to affect capital market structure development."
		]
	};

	function handleScroll() {
		scrollY = window.scrollY;

		parallaxSection.style.backgroundPosition = `50% calc(50% - ${scrollY * parallaxSpeed}px)`;
		parallaxContent.style.transform = `translateY(${scrollY * (parallaxSpeed * 0.5)}px)`;
		parallaxBottom.style.backgroundPosition = `50% calc(50% - ${scrollY * parallaxSpeed}px)`;
		parallaxLast.style.backgroundPosition = `50% calc(50% - ${scrollY * parallaxSpeed}px)`;
	}

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		handleScroll();
	});

	const scrollToBottom = async (node) => {
		node.scroll({ top: node.scrollHeight, behavior: "smooth" });
	};
</script>

<svelte:head>
	<title>
		HOME | Allegra Consult
	</title>
	<meta name="description" content="ALLEGRA is a Global Consultancy. We guide our clients as partners through business development and prospective capital-raising, immaterial of the stage of growth of the company — whether it is operating as a start-up, requires accelerator-style funding to achieve next-stage growth, or is looking for advance funding as the company contemplates public listing.">
</svelte:head>


<br><br><br><br>

<div>
	<video width="100%" height="50%" autoplay muted loop controls={false}>
		<source src="earth.mp4" type="video/mp4">
		Your browser does not support the video tag.
	</video>
</div>


<div class="fixed top-0 left-0 mx-auto mt-0 w-[100%] text-center z-[100]">
	<div class="text-slate-50 dark:bg-slate-50 bg-white shadow-md p-4 mb-4">
		<div class="inline-block">
			<div class="flex text-center items-center">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					src="/allegra-icon.png"
					alt="Allegra Consult icon"
					class="mr-21"
					on:click={() => scrollToBottom(parallaxBottom)}
					on:keydown={() => scrollToBottom(parallaxBottom)}
				>
				<h1 class="fadeInAnimated font-extrabold text-4xl text-[#A284B6]">ALLEGRA</h1>
			</div>
		</div>
	</div>
</div>



<div style="z-index:1" class="absolute mt-[-30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div style="background-color: rgba(9, 43, 91, 0.7);" class="rounded-xl text-gray-600 p-8 mb-4 bg-[#00000] opacity-1">
		<div>
			<h1 class="fadeInAnimated font-semibold mb-2 text-[#A284B6] text-8xl">ALLEGRA </h1>
			<p class="fadeInAnimated text-[#A284B6] text-4xl">A Global Consultancy</p>
		</div>

	</div>
</div>

<div style="z-index:1" class="absolute mt-[-50%] left-80 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn1s text-gray-600 dark:text-slate-400 dark:text-white text-xl">Working alliances</p>
	</div>
</div>

<div style="z-index:1" class="absolute mt-[-40%] left-64 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn2s text-gray-600 dark:text-slate-400 text-xl dark:text-white">Business</p>
		<p class="fadeIn2s text-gray-600 dark:text-slate-400 text-xl dark:text-white">development</p>
	</div>
</div>

<div style="z-index:1" class="absolute mt-[-22%] left-56 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn3s text-gray-600 dark:text-slate-400 dark:text-white text-xl">Building tech</p>
	</div>
</div>

<div style="z-index:1" class="absolute mt-[-12%] left-72 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn3s text-gray-600 dark:text-slate-400 dark:text-white text-xl">Hands on</p>
	</div>
</div>


<div style="z-index:1" class="absolute mt-[-50%] right-32 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn1s text-gray-600 dark:text-slate-400 dark:text-white text-xl">Guiding clients</p>
		<p class="fadeIn1s text-gray-600 dark:text-slate-400 dark:text-white text-xl">As partners</p>
	</div>
</div>

<div style="z-index:1" class="absolute mt-[-40%] right-2 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn2s text-gray-600 dark:text-slate-400 text-xl dark:text-white">Tailoring Counsel </p>
		<p class="fadeIn2s text-gray-600 dark:text-slate-400 text-xl dark:text-white">to specific Needs </p>
	</div>
</div>


<div style="z-index:1" class="absolute mt-[-22%] transform right-14 -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn3s text-gray-600 dark:text-slate-400 dark:text-white text-xl">Introducing</p>
		<p class="fadeIn3s text-gray-600 dark:text-slate-400 dark:text-white text-xl">relationships</p>
	</div>
</div>


<div style="z-index:1" class="absolute mt-[-12%] right-20 transform -translate-x-1/2 -translate-y-1/2 text-center">
	<div class="text-gray-600 shadow-md mb-4 p-10 bg-[#00000] opacity-90">
		<p class="fadeIn3s text-gray-600 dark:text-slate-400 dark:text-white text-xl">Raising capital</p>
	</div>
</div>













<div class="about-us-container">
	<div class="about-us-content">
		<h1 class="about-us-title">{text.title}</h1>
		{#each text.paragraphs as paragraph (paragraph)}
			<p class="about-us-paragraph">{paragraph}</p>
		{/each}
	</div>
</div>

<div bind:this={parallaxBottom} class="parallax-bottom"></div>



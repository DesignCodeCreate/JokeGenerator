<script>
	import { onMount } from "svelte";

	import AboutDesktop from "../components/About-Desktop.svelte";
	import AboutMobile from "../components/About-Mobile.svelte";

	import InfoDesktop from "../components/Info-Desktop.svelte";
	import InfoMobile from "../components/Info-Mobile.svelte";

	import Spider from "../components/Spider.svelte";
	import Earth from "../components/Earth.svelte";
	import Contact from "../components/Contact.svelte";
	import Footer from "../components/Footer.svelte";

	let deviceMobile = true;

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		var a;
		var answer = document.getElementById("result");
		function isMobile() {
			if (
				navigator.userAgent.match(/Android/i) ||
				navigator.userAgent.match(/webOS/i) ||
				navigator.userAgent.match(/iPhone/i) ||
				navigator.userAgent.match(/iPad/i) ||
				navigator.userAgent.match(/iPod/i) ||
				navigator.userAgent.match(/BlackBerry/i) ||
				navigator.userAgent.match(/Windows Phone/i)
			) {
				a = true;
			} else {
				a = false;
			}
			return a;
		}

		deviceMobile = isMobile();

	
	});

	const scrollToBottom = async (node) => {
		node.scroll({ top: node.scrollHeight, behavior: "smooth" });
	};
</script>

<svelte:head>
	<title>HOME | Allegra-Consult Ltd</title>
	<meta
		name="description"
		content="ALLEGRA is a Global Consultancy. We guide our clients as partners through business development and prospective capital-raising, immaterial of the stage of growth of the company — whether it is operating as a start-up, requires accelerator-style funding to achieve next-stage growth, or is looking for advance funding as the company contemplates public listing."
	/>
</svelte:head>

<p id="result" />

<br /><br /><br /><br />

<div
	class="mx-auto w-full"
	style="top: 0; left: 0; width: 100%; text-align: center; margin-top: 0; position: fixed; z-index: 100;"
>
	<div class="text-slate-50 dark:bg-slate-50 bg-white shadow-md p-4 mb-4">
		<div style="display:inline-block;">
			<div
				style="display: flex; transform text-align:center; align-items: center;"
			>
				<img alt="Allegra Icon" src="/allegra-icon.png" />
				<h1
					style="color:#A284B6;"
					class="fadeInAnimated text-4xl"
				>
					<b>ALLEGRA-Consult Ltd</b>
				</h1>
			</div>
		</div>
	</div>
</div>


{#if !deviceMobile}
	<Earth />
	<AboutDesktop />
	<Spider />
	<div class="london-background"></div>
	<InfoDesktop />

{:else}
	<br />
	<AboutMobile />
	<div class="london-background"></div>
	<br /><br /><br /><br /><br />
	<InfoMobile />
{/if}

<Contact />
<Footer />
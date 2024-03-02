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
    import BackToTop from "../components/BackToTop.svelte";
    import MenuBox from "../components/MenuBox.svelte";


	let deviceMobile = true;
	let menuBox = false;

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

	function scrollIntoView(target) {
		const el = document.querySelector(target);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});

	}

	function elementClickCallback(event) {
		switch (event.detail) {
			case "Home": {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
				break;
			}
			case "About": {
				scrollIntoView("#aboutUs");
				break;
			}
			case "Contact": {
				scrollIntoView("#contactUs");

				break;
			}
		}
	}

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

<div class="mx-auto w-full text-center w-full top-0 left-0 z-40 fixed mt-0">
	<div class="text-slate-50 dark:bg-slate-50 bg-white shadow-md p-4 mb-4">
		<div dir="rtl">
			<MenuBox menuBox={menuBox} on:elementClicked={elementClickCallback}/>
			<div class="inline-block">
				<div class="flex text-center items-center">
					<img alt="Allegra Icon" src="/allegra-icon.png" />
					<h1 class="text-[#A284B6] fadeInAnimated text-4xl">
						<b>ALLEGRA-Consult Ltd</b>
					</h1>
				</div>
			</div>
		</div>
	</div>
</div>




{#if !deviceMobile}
	<Earth />
	<div id="aboutUs"><AboutDesktop/></div>
	<Spider />
	<div class="london-background"></div>
	<InfoDesktop />
{:else}
	<br />
	<div id="aboutUs"><AboutMobile /></div>
	<br />
	<div class="london-background"></div>
	<br /><br /><br /><br /><br />
	<InfoMobile />
{/if}


<div id="contactUs"><Contact /></div>
<Footer />
<BackToTop />

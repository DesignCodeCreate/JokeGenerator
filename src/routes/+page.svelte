<script>
	import { onMount } from "svelte";

	let data = null;
	let error = null;

	async function getJokeData() {
		try {
			const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist");
			if (!response.ok) {
				throw new Error("Network response failed");
			}
			data = await response.json();
		} catch (err) {
			error = err.message;
		}
	}

	onMount(async () => {
		await getJokeData();
	});
</script>

<svelte:head>
	<title>Joke Generator Website!</title>
</svelte:head>

<style>
	.lexend {
		font-family: "Lexend", sans-serif;
		font-optical-sizing: auto;
		font-weight: 500;
		font-style: normal;
	}

</style>

<div class="mx-auto w-full text-center w-full top-0 left-0 z-40 fixed mt-0">
	<div class="dark:bg-slate-50 bg-white shadow-md p-4 mb-4">
		<div dir="rtl">
			<div class="inline-block">
				<div class="flex text-center items-center">
					<h1 class="text-[#A284B6] text-2xl lexend">
						<b>!Joke Generator</b>
					</h1>
				</div>
			</div>

		</div>
	</div>

	{#if data}
		<p class="lexend">{data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`}</p>
	{:else if error}
		<p class="lexend">Error: {error}</p>
	{:else}
		<p class="lexend">Loading...</p>
	{/if}

</div>




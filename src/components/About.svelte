<script>
    export let text = {
		title: "ABOUT US",
		paragraphs: [
			"ALLEGRA-Consult Ltd offers advice to management and operating partner teams looking to align business models with capital providers. We specialize in bespoke service, working with senior management and boards of directors of companies to assure successful capital-raising that satisfies their long-term objectives. This can mean, in certain instances, constructing networks of affiliated partners to increase the value of a company. But it always centers on practical deal advice that marries our clients with precisely the right capital providers to assure the best match for their corporate culture and capital requirements.",
			"ALLEGRA-Consult Ltd is actively partnered with capital groups and established buy-side asset managers and works closely with major bulge-bracket banking institutions, offering counsel on myriad business pursuits - embracing everything from capital raising, legal and regulatory guidance to assisting on operational set-up and restructuring in front - to back - office trading capabilities.",
			"ALLEGRA-Consult Ltd's directors sit on the boards of numerous firms - most notably in the technology and fintech spaces. They also formally advise governments, central banks and capital market associations on trading, technology, data, cybersecurity, regulation and business - and how each inter-connect to affect capital market structure development."
		]
	};

</script>

<div class="about-us-container">
    <div class="about-us-content">
        <h1 class="about-us-title">{text.title}</h1>
        {#each text.paragraphs as paragraph (paragraph)}
            <p class="about-us-paragraph">{paragraph}</p>
            <br>
        {/each}
    </div>
</div>
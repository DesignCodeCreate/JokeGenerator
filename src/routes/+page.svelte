<script>
  import { onMount } from 'svelte';

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

    $: {
      parallaxSection.style.backgroundPosition = `50% calc(50% - ${scrollY * parallaxSpeed}px)`;
      parallaxContent.style.transform = `translateY(${scrollY * (parallaxSpeed * 0.5)}px)`;
      parallaxBottom.style.backgroundPosition = `50% calc(50% - ${scrollY * parallaxSpeed}px)`;
      parallaxLast.style.backgroundPosition = `50% calc(50% - ${scrollY * parallaxSpeed}px)`;
    }
  }

  let fadeInElement;
  let observer;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fadeInElement.classList.add('fade-in');
          observer.unobserve(fadeInElement);
        }
      });
    };

    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, 
    });

    observer.observe(fadeInElement);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  });

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  };
</script>


<svelte:head>
  <title>
    HOME | Allegra Consult
  </title>
  <link rel="icon" type="image/svg" href={"https://static.wixstatic.com/media/1e4c48_d258b29b06fc43dab527a2e7c5700dbd~mv2.png/v1/crop/x_35,y_100,w_396,h_288/fill/w_103,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e4c48_d258b29b06fc43dab527a2e7c5700dbd~mv2.png"} />
  <meta name="description" content="ALLEGRA is a Global Consultancy. We guide our clients as partners through business development and prospective capital-raising, immaterial of the stage of growth of the company — whether it is operating as a start-up, requires accelerator-style funding to achieve next-stage growth, or is looking for advance funding as the company contemplates public listing.">
</svelte:head>


<style>
  .parallax-section {
    position: relative;
    height: 100vh;
    background-image: url('https://assets.bizclikmedia.net/1800/64b44a66996a1a560c3f239d62fdb144:af4ffe268cf36a043a67096afb6ab7c9/gettyimages-1273484747-20-281-29-jpg.webp');
    background-size: cover;
    background-position: center;
    transition: background-position 0.2s ease-out;
    overflow: hidden;
  }

  .parallax-bottom {
    position: relative;
    height: 60vh;
    background-image: url('https://www.everwallpaper.co.uk/cdn/shop/products/London-night-wallpaper-mural-plain.jpg?v=1650434291');
    background-size: cover;
    background-position: center;
    transition: background-position 0.2s ease-out;
    overflow: hidden;
  }

  .parallax-last {
    position: relative;
    height: 400px;
    
    background-size: cover;
    background-position: center;
    transition: background-position 0.2s ease-out;
    overflow: hidden;
  }
  hr {
    border: none;
    height: 7px;
    color: #333;
    background-color: #333;
  }
  @keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
  }

  .fadeInAnimated {
    opacity: 0;
    animation: fadeIn 3s forwards;
  }

  .about-us-container {
    @apply h-80 flex justify-center items-center;
  }

  .about-us-content {
    @apply bg-white text-center p-8;
  }

  .about-us-title {
    @apply text-black text-xl font-semibold mb-6 text-5xl fadeInAnimated;
    color: #00305B;
  }

  .about-us-paragraph {
    @apply fadeInAnimated;
    color: #00305B;
  }

  .fade-in {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  .fade-in:not(.fade-in) {
    opacity: 0;
  }

</style>



<div bind:this={parallaxSection} class="parallax-section">
  <div bind:this={parallaxContent}>
    
  </div>
</div>

<div class="mx-auto mt-0 w-full" style="top: 0; left: 0; width: 100%; text-align: center; margin-top: 0; position: fixed; z-index: 100;">
  <div class="text-slate-50 dark:bg-slate-50 bg-white shadow-md p-4 mb-4">
    <div style="display:inline-block;">
      <div style="display: flex; transform text-align:center; align-items: center;">
        <img on:click={() => scrollToBottom(parallaxBottom)} src="https://static.wixstatic.com/media/1e4c48_d258b29b06fc43dab527a2e7c5700dbd~mv2.png/v1/crop/x_35,y_100,w_396,h_288/fill/w_103,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e4c48_d258b29b06fc43dab527a2e7c5700dbd~mv2.png" class="mr-21">
        <h1 style="color:#A284B6;" class="fadeInAnimated font-extrabold text-4xl"><b>ALLEGRA</b></h1>
      </div>
    </div>
  </div>
</div>

<div style="z-index:1" class="absolute top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <div style="background-color: rgba(6, 43, 91, 0.9);" class="text-gray-600 shadow-md mb-4 p-28">
    <h1 class="fadeInAnimated text-gray-600 text-xl font-semibold mb-2 dark:text-white text-5xl">ALLEGRA </h1>
    <p class="fadeInAnimated text-gray-600 dark:text-slate-400 text-l dark:text-white">Is a Global Consultancy</p>
  </div>
</div>

<div style="z-index:1" class="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <div style="background-color: rgba(6, 43, 91, 0.9);" class="text-gray-600 shadow-md p-8 mb-4">
    <p class="text-gray-600 dark:text-white fadeInAnimated">
      <b>ALLEGRA</b> prides itself on tailoring its counsel to specific needs in as hands-on a manner as possible. We guide our clients as partners through business development and prospective capital-raising, immaterial of the stage of growth of the company — whether it is operating as a start-up, requires accelerator-style funding to achieve next-stage growth, or is looking for advance funding as the company contemplates public listing.
    </p>
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
<div>
  <hr>
</div>

<div bind:this={parallaxLast} class="parallax-last">
  <video width="100%" height="100%" autoplay muted loop>
    <source src="earth.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>
</div>


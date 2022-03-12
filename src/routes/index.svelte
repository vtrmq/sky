<script>
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>Inicio</title>
</svelte:head>
<div>
  <header class="header-home">
    <figure>
      <img class="image-logo" src="./images/logo.svg" alt="" />
    </figure>
    <h1 class="main-title">SvelteJs</h1>
    <p class="header-p">Hazte desarrollador/a web con el framework Svelte</p>
    <a href="/signup" class="link-register">Registrarme</a>
  </header>
  <div class="home-feature">
    <div class="wrapper">
      <div class="container">
        <section class="feature">
          <h2 class="feature-title">👶 Simple</h2>
          <p class="details">
            El principal y más importante rasgo de Svelte es que es fácil de
            aprender y sencillo de utilizar.
          </p>
        </section>
        <section class="feature">
          <h2 class="feature-title">⚡ Más rápido</h2>
          <p class="details">
            las aplicaciones creadas con Svelte tienen menos código para
            descargar, analizar y ejecutar.
          </p>
        </section>
        <section class="feature">
          <h2 class="feature-title">🚀 Moderno</h2>
          <p class="details">
            Svelte es un compilador, convierte un código complejo en JavaScript
            puro, simple y optimizado.
          </p>
        </section>
        <section class="feature">
          <h2 class="feature-title">🌟 Reactividad</h2>
          <p class="details">
            Svelte es verdaderamente reactivo y no utilizar librerías para
            manejar el estado de la aplicación.
          </p>
        </section>
        <section class="feature">
          <h2 class="feature-title">🎨 Hermoso</h2>
          <p class="details">
            Es posible acceder fácilmente al head, window y body del documento,
            posee transiciones y animaciones incorporadas.
          </p>
        </section>
        <section class="feature">
          <h2 class="feature-title">🌀 La trilogía</h2>
          <p class="details">
            Sólo tienes que conocer lo básico de HTML, CSS y JavaScript para
            empezar a programar (Esto también lo aprenderás aquí)
          </p>
        </section>
      </div>
    </div>
  </div>
  <div>
    <h3 class="title-info">¿Que es Svelte?</h3>
    <div class="info-svelte">
      Svelte es un framework que proporciona un enfoque diferente para crear
      aplicaciones web con respecto al resto de los framework. El resultado de
      este enfoque no es solo que permite generar aplicaciones más pequeñas y de
      mejor rendimiento, sino también busca ofrecer una mejor experiencia de
      desarrollador debido a que son menos los conceptos y herramientas para
      aprender, haciendo que sea más accesible para las personas que tienen muy
      poco conocimiento en el ecosistema de herramientas de desarrollo moderno.
    </div>
  </div>
  <div>
    <h3 class="title-what">Lo que encontrarás</h3>
    <p class="p-what">
      Desde el principio creará su primera aplicación Svelte en cuestión de
      minutos. Di adios a los aburridos tutoriales y cursos con teoria
      innecesaria.
    </p>
    <ul>
      <li>Clases personalizadas y en vivo con el tutor</li>
      <li>Ejercicios prácticos por cada módulo</li>
      <li>Cree e implemente aplicaciones Svelte rápidas e interactivas</li>
      <li>Aprenderás a implementar tus aplicaciones en Vercel</li>
      <li>Gestionar las versiones de tus proyectos con git y GitHub</li>
      <li>Conecta tus aplicaciones con las bases de datos MySQL y Firebase</li>
    </ul>
  </div>
  <Footer />
</div>

<style>
  ul {
    padding: 20px;
    /*margin: 0 auto;*/
    max-width: 380px;
    margin: 0 0 0 20px;
  }
  ul li {
    margin: 4px 0 16px;
  }

  .title-what {
    margin-top: 4rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: var(--c-text-title);
    text-align: center;
  }
  .p-what {
    text-align: center;
    padding: 0 20px;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  .title-info {
    color: var(--c-white-dark);
    padding: 20px 24px 30px;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
  }
  .info-svelte {
    padding: 20px 30px;
    background-color: var(--bg-color-text);
    max-width: 960px;
    margin: 0 auto;
    line-height: 2;
    border-radius: 4px;
  }
  .container {
    margin: 0 auto;
    max-width: 430px;
  }
  .details {
    margin: 0;
    line-height: 1.6;
    font-size: 1rem;
    color: var(--c-text-light);
    padding-top: 0.25rem;
  }
  .feature-title {
    margin: 0;
    border-bottom: 0;
    line-height: 1.4;
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--c-text-title);
  }
  .feature {
    padding: 20px 24px;
    width: 100%;
  }
  .wrapper {
    border-top: 1px solid var(--c-divider);
    padding-top: 1.2rem;
    /*padding: 0 1.5rem;*/
  }
  .home-feature {
    margin: 0 auto;
    padding: 2.5rem 0 2.75rem;
    max-width: 960px;
    padding-top: 0;
  }
  .link-register {
    text-decoration: none;
    padding: 0 20px;
    line-height: 44px;
    font-size: 1rem;
    border-radius: 6px;
    padding: 0 20px;
    margin-top: 1.5rem;
    display: inline-block;
    font-weight: 500;
    color: var(--c-link-text);
    border: 2px solid var(--c-link);
    transition: background-color 0.1s ease;
  }
  .link-register:hover {
    color: var(--c-bg-link);
    background-color: var(--c-brand-light);
  }
  .header-home {
    margin: 2.5rem 0 2.75rem;
    padding: 0 1.5rem;
    text-align: center;
  }
  .image-logo {
    display: block;
    margin: 0 auto;
    width: auto;
    max-width: 100%;
    max-height: 280px;
  }
  .main-title {
    margin-top: 1.5rem;
    font-size: 2rem;
    color: var(--c-text-title);
  }
  .header-p {
    margin: 0;
    margin-top: 0.25rem;
    line-height: 1.3;
    font-size: 1.2rem;
    color: var(--c-text-light);
  }
  @media (min-width: 420px) {
    ul {
      /*margin: 0 auto;*/
      max-width: 480px;
      /*margin: 0 auto;*/
    }
    .link-register {
      margin-top: 2rem;
      padding: 0 24px;
      line-height: 52px;
      font-size: 1.2rem;
      font-weight: 500;
    }
    .header-home {
      margin: 3.5rem 0;
    }
    .main-title {
      font-size: 3rem;
    }
    .header-p {
      line-height: 1.2;
      font-size: 1.6rem;
    }
    .wrapper {
      padding-top: 2rem;
    }
    .feature-title {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 680px) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 40rem;
      gap: 0 40px;
      margin: 0 auto;
    }
    ul li {
      text-align: left;
      justify-content: left;
    }
  }
  @media (min-width: 720px) {
    .details,
    .info-svelte,
    .p-what,
    ul li {
      font-size: 0.9rem;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      max-width: none;
    }
    .home-feature {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    }
    .header-home {
      margin: 4rem 0 4.25rem;
    }
  }
  @media (min-width: 800px) {
    ul {
      max-width: 46rem;
    }
  }
</style>

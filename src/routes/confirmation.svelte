<script context="module">
  export const load = async ({ url }) => {
    const tk = url.searchParams.get("tk");
    return {
      props: {
        tk,
      },
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  export let tk;
  let emoji = "🎯";
  let message = "Confirmando...";
  let h_msg = "";

  async function handleConfirmation() {
    const res = await fetch("./api/confirmation", {
      method: "POST",
      body: JSON.stringify({ tk }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const req = await res.json();
    if (req.reqs.resp === "no_domain") {
      emoji = "🎃";
      message = `El dominio desde donde estás verificando el token no existe`;
      h_msg = "";
    } else if (req.reqs.resp === "no_token") {
      emoji = "🎃";
      message = `El token que estas verificando no existe`;
      h_msg = "";
    } else if (req.reqs.resp === "done") {
      emoji = "🎉";
      message = `Felicitaciones ${req.reqs.name} ya eres parte del grupo. Ahora confirmaremos tus datos y podrás comenzar con tus estudios.`;
      h_msg = "Exitos en tu carrera";
    } else if (req.reqs.resp === "success") {
      emoji = "🎯";
      message = `Hola ${req.reqs.name}, tu activación fue exitosa y ya eres parte del grupo, vamos a confirmar tus datos y comenzarás con tus estudios.`;
      h_msg = "Exitos en tu carrera";
    }
  }

  onMount(() => {
    handleConfirmation();
  });
</script>

<svelte:head>
  <title>Confirmación</title>
</svelte:head>
<div class="wrapper">
  <div class="inner-register">
    <div class="emoji">{emoji}</div>
    <p class="p-info-register">{message}</p>
    <h2>{h_msg}</h2>
  </div>
</div>

<style>
  h2 {
    text-align: center;
    color: var(--c-text-title);
    font-weight: 400;
  }
  .emoji {
    font-size: 5rem;
    text-align: center;
  }
  .inner-register {
    padding: 1.4rem;
    margin: 2rem auto;
    max-width: 460px;
  }
  .p-info-register {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (min-width: 720px) {
    .p-info-register {
      font-size: 0.9rem;
    }
    .wrapper {
      margin: 4rem 0 8rem;
    }
    .emoji {
      font-size: 4rem;
    }
  }
</style>

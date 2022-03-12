<script>
  import { goto } from "$app/navigation";
  import Button from "$lib/components/Button.svelte";
  import Input from "$lib/components/Input.svelte";
  import Label from "$lib/components/Label.svelte";
  import Row from "$lib/components/Row.svelte";
  import Description from "$lib/components/Description.svelte";
  import Title from "$lib/components/Title.svelte";
  import { user } from "$lib/store/user";

  let log = "";
  let enabled = false;
  let text = "Iniciar sesión";
  let info = { email: "", password: "" };

  async function submitSignup() {
    info.email = info.email.trim();
    if (!info.email.length) {
      log = "email";
      return;
    }
    info.password = info.password.trim();
    if (!info.password.length) {
      log = "password";
      return;
    }
    enabled = true;
    text = "Validando...";
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const req = await res.json();
    //console.log(req);

    if (!req.isLogged) {
      enabled = false;
      text = "Iniciar sesión";
      return;
    }

    user.set(req.user);
    if (req.type === "teacher") {
      goto("/teacher");
    } else if (req.type === "member") {
      goto("/member");
    }
  }
</script>

<svelte:head>
  <title>Iniciar sesión</title>
</svelte:head>
<div class="wrapper">
  <div class="inner-wrapper">
    <div class="box-b">
      <form on:submit|preventDefault={submitSignup}>
        <Title align="center">Iniciar sesión</Title>
        <div class="img-lock">
          <svg
            id="Layer_1"
            style="enable-background:new 0 0 512 512;"
            version="1.1"
            viewBox="0 0 512 512"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><style type="text/css">
              .st0 {
                fill: #f06292;
              }
              .st1 {
                fill: none;
                stroke: #ffffff;
                stroke-width: 15;
                stroke-miterlimit: 10;
              }
              .st2 {
                fill: none;
                stroke: #ffffff;
                stroke-width: 10;
                stroke-miterlimit: 10;
              }
            </style><g id="Layer_1_1_"
              ><path
                class="st0"
                d="M494,256c0,131.4-106.6,238-238,238S18,387.4,18,256S124.6,18,256,18S494,124.6,494,256z"
              /></g
            ><g
              ><path
                class="st1"
                d="M386.9,218.5H125.1v147c0,24.2,19.7,43.9,43.9,43.9h174c24.2,0,43.9-19.7,43.9-43.9V218.5z"
              /><path
                class="st1"
                d="M341.8,218.5c0,0,20.5-115.9-84-115.9c-108.5,0-89.4,115.9-89.4,115.9"
              /></g
            ><path
              class="st2"
              d="M289.5,292.6c0-16.4-13.3-29.7-29.7-29.7s-29.7,13.3-29.7,29.7c0,10.2,5.2,19.1,12.9,24.5v32.3h33.5V317  C284.5,311.8,289.5,302.8,289.5,292.6z"
            /></svg
          >
        </div>
        <Description>
          Al registrarme, acepto la política de privacidad y los términos de
          servicio de SvelteJs.
        </Description>
        <Label text="Datos de acceso" />
        <Row class="mb-1">
          <Input
            type="text"
            placeholder="Correo electrónico"
            msg="Escribe tu correo electrónico"
            sw={log === "email"}
            on:input={() => (log = "")}
            bind:value={info.email}
            lowercase
          />
        </Row>
        <Row>
          <Input
            type="password"
            placeholder="Contraseña"
            msg="Escribe tu contraseña"
            sw={log === "password"}
            on:input={() => (log = "")}
            bind:value={info.password}
          />
        </Row>
        <div class="container-btn-submit">
          <Button type="submit" {text} blue {enabled} />
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  svg {
    width: 5rem;
    margin-top: 0.6rem;
  }
  .inner-wrapper {
    margin: 0 auto;
    max-width: 360px;
  }
  .container-btn-submit {
    display: flex;
    justify-content: center;
    margin: 2.5rem 0 1rem;
  }
  .img-lock {
    text-align: center;
  }
  .box-b {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
    box-shadow: 2px 4px 13px 1px var(--c-shadow);
    margin-bottom: 50px;
    margin-top: 20px;
    background: var(--bg-box-b);
    border-radius: 6px;
  }
  @media (min-width: 720px) {
    .wrapper {
      margin: 3rem 0 8rem;
    }
    .box-b {
      background: var(--bg-box-b);
      box-shadow: 2px 4px 13px 1px #00000000;
      margin-bottom: 0;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
      border-radius: 0;
    }
    .inner-wrapper {
      box-shadow: 2px 4px 13px 1px var(--c-shadow-inter);
      border: 1px solid var(--bg-border-inter);
    }
  }
</style>

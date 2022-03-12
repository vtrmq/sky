<script>
  import Button from "$lib/components/Button.svelte";
  import Input from "$lib/components/Input.svelte";
  import Select from "$lib/components/Select.svelte";
  import Label from "$lib/components/Label.svelte";
  import Row from "$lib/components/Row.svelte";
  import Description from "$lib/components/Description.svelte";
  import Title from "$lib/components/Title.svelte";

  let swSignup = false;
  let log = "";
  let enabled = false;
  let text = "Registrarme";
  let info = {
    name: "",
    surnames: "",
    email: "",
    indicative: "",
    phone: "",
    password1: "",
    password2: "",
    day: "0",
    month: "0",
    year: "0",
  };
  let days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "23",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  let months = [
    { id: "01", month: "Enero" },
    { id: "02", month: "Febrero" },
    { id: "03", month: "Marzo" },
    { id: "04", month: "Abril" },
    { id: "05", month: "Mayo" },
    { id: "06", month: "Junio" },
    { id: "07", month: "Julio" },
    { id: "08", month: "Agosto" },
    { id: "09", month: "Septiembre" },
    { id: "10", month: "Octubre" },
    { id: "11", month: "Noviembre" },
    { id: "12", month: "Diciembre" },
  ];
  let years = [];
  var currentTime = new Date();
  let year_actual = currentTime.getFullYear();
  let initial = year_actual - 80;
  for (let i = initial; i <= year_actual - 10; i++) {
    years.push(i);
  }

  async function submitSignup() {
    info.name = info.name.trim();
    if (!info.name.length) {
      log = "name";
      return;
    }
    info.surnames = info.surnames.trim();
    if (!info.surnames.length) {
      log = "surname";
      return;
    }
    info.email = info.email.trim();
    if (!info.email.length) {
      log = "email";
      return;
    }
    info.indicative = info.indicative.trim();
    if (!info.indicative.length) {
      log = "indicative";
      return;
    }
    info.phone = info.phone.trim();
    if (!info.phone.length) {
      log = "phone";
      return;
    }
    info.password1 = info.password1.trim();
    if (!info.password1.length) {
      log = "password1";
      return;
    }
    info.password2 = info.password2.trim();
    if (!info.password2.length) {
      log = "password2";
      return;
    }

    if (info.password1 !== info.password2) {
      return;
    }

    if (info.day === "0") {
      log = "day";
      return;
    }
    if (info.month === "0") {
      log = "month";
      return;
    }
    if (info.year === "0") {
      log = "year";
      return;
    }
    const data = {
      name: info.name,
      surnames: info.surnames,
      email: info.email,
      indicative: info.indicative,
      phone: info.phone,
      password: info.password1,
      date_birth: `${info.day}/${info.month}/${info.year}`,
    };

    enabled = true;
    text = "Enviando...";
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resp = await res.json();

    console.log(resp.req);
    if (resp.req === "no_domain") {
      console.log("El dominio no existe");
      return;
    }
    swSignup = true;
    enabled = false;
    text = "Registrarme";
  }
</script>

<svelte:head>
  <title>Regístrate</title>
</svelte:head>
<div class="wrapper">
  {#if !swSignup}
    <div class="inner-wrapper">
      <div class="box-left">
        <div class="emoji">📑</div>
        <h1 class="h1">Tu registro incluye</h1>
        <ul>
          <li>Tareas y proyectos ilimitados</li>
          <li>Almacenamiento ilimitado</li>
          <li>Vistas de Lista, Tablero y Calendario</li>
          <li>Y mucho más...</li>
        </ul>
      </div>
      <div class="box-right">
        <form on:submit|preventDefault={submitSignup}>
          <Title>Registrarse</Title>
          <Description>
            Al registrarme, acepto la política de privacidad y los términos de
            servicio de SvelteJs.
          </Description>
          <Label text="Datos de usuario" />
          <Row class="grid col-two">
            <Input
              type="text"
              placeholder="Nombre"
              msg="Falta el nombre"
              sw={log === "name"}
              on:input={() => (log = "")}
              bind:value={info.name}
            />
            <Input
              type="text"
              placeholder="Apellidos"
              msg="Faltan los apellidos"
              sw={log === "surname"}
              on:input={() => (log = "")}
              bind:value={info.surnames}
            />
          </Row>
          <Row class="mb-1-5">
            <Input
              type="text"
              placeholder="Correo electrónico"
              msg="Escribe el correo electrónico"
              sw={log === "email"}
              on:input={() => (log = "")}
              bind:value={info.email}
            />
          </Row>
          <Label text="Indicativo y número telefónico" />
          <Row class="grid col-tel mb-1-5">
            <Input
              type="number"
              placeholder="57"
              msg="Indicativo"
              sw={log === "indicative"}
              on:input={() => (log = "")}
              bind:value={info.indicative}
            />
            <Input
              type="number"
              placeholder="Teléfono"
              msg="Falta el número telefónico"
              sw={log === "phone"}
              on:input={() => (log = "")}
              bind:value={info.phone}
            />
          </Row>
          <Label text="Contraseña de acceso" />
          <Row class="grid col-two mb-1-5">
            <Input
              type="password"
              placeholder="Contraseña"
              msg="Escribe la contraseña"
              sw={log === "password1"}
              on:input={() => (log = "")}
              bind:value={info.password1}
            />
            <Input
              type="password"
              placeholder="Confirmar"
              msg="Escribe la confirmación"
              sw={log === "password2"}
              on:input={() => (log = "")}
              bind:value={info.password2}
            />
          </Row>
          <Label text="Fecha de nacimiento" />
          <Row class="grid col-three">
            <Select
              msg="Falta el día"
              sw={log === "day"}
              bind:value={info.day}
              on:change={() => (log = "")}
            >
              <option value="0">Día</option>
              {#each days as day}
                <option value={day}>{day}</option>
              {/each}
            </Select>
            <Select
              msg="Falta el mes"
              sw={log === "month"}
              bind:value={info.month}
              on:change={() => (log = "")}
            >
              <option value="0">Mes</option>
              {#each months as month}
                <option value={month.id}>{month.month}</option>
              {/each}
            </Select>
            <Select
              msg="Falta el año"
              sw={log === "year"}
              bind:value={info.year}
              on:change={() => (log = "")}
            >
              <option value="0">Año</option>
              {#each years as year}
                <option value={year}>{year}</option>
              {/each}
            </Select>
          </Row>
          <div class="container-btn-submit">
            <Button type="submit" {text} blue {enabled} />
          </div>
        </form>
      </div>
    </div>
  {:else}
    <div class="inner-register">
      <div class="emoji">
        <svg
          class="icon-email"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          ><title>email</title><g id="email"
            ><g id="email-2" data-name="email"
              ><rect
                x="2"
                y="20"
                width="48"
                height="26"
                fill="#1aa6b8"
              /><polygon
                points="50 20.06 2 20.06 26 2 50 20.06"
                fill="#24b9cc"
              /><polygon
                points="39.12 6.09 5.71 6.09 5.71 38.02 46.29 38.02 46.29 13.83 39.12 6.09"
                fill="#eae8e8"
              /><polygon
                points="39.12 6.09 39.12 13.83 46.29 13.83 39.12 6.09"
                fill="#d7d4d4"
              /><polygon
                points="50 20 50 50 26 34 50 20"
                fill="#80deea"
              /><polygon
                points="26 34 2 50 2 20 26 34"
                fill="#80deea"
              /><polygon points="50 50 2 50 26 34 50 50" fill="#5cd4e3" /><path
                d="M26,12a8,8,0,1,0,5.19,14.08l-1-1.22A6.4,6.4,0,1,1,32.4,20v1.2a1.2,1.2,0,0,1-2.4,0V16H28.4v.82A4,4,0,0,0,26,16a4,4,0,1,0,2.88,6.76A2.79,2.79,0,0,0,34,21.6h0V20A8,8,0,0,0,26,12ZM26,22.4A2.4,2.4,0,1,1,28.4,20,2.4,2.4,0,0,1,26,22.4Z"
                fill="#ff6e40"
              /></g
            ></g
          ></svg
        >
      </div>
      <p class="p-info-register">
        Felicitaciones {info.name} ya diste tu primer paso, ahora ve a tu correo
        electrónico: {info.email}, allí encontrarás un Email que te hemos
        enviado para que actives tu cuenta.
      </p>
    </div>
  {/if}
</div>

<style>
  .icon-email {
    width: 100px;
  }
  .inner-register {
    /*background: green;*/
    padding: 1.4rem;
    margin: 2rem auto;
    max-width: 460px;
  }
  .p-info-register {
    margin: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.6;
    text-align: center;
  }
  .container-btn-submit {
    display: flex;
    justify-content: center;
    margin: 3rem 0 4rem;
  }
  .emoji {
    font-size: 4rem;
    text-align: center;
  }
  .box-left {
    display: none;
  }
  .box-right {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
    box-shadow: 2px 4px 13px 1px var(--c-shadow);
    margin-bottom: 50px;
    margin-top: 20px;
    background: var(--bg-box-b);
    border-radius: 6px;
    margin-left: 16px;
    margin-right: 16px;
  }
  ul {
    list-style: none;
  }
  li::before {
    display: inline-block;
    content: "➜";
    margin-right: 0.3rem;
  }
  li {
    text-indent: -0.75em;
    margin-left: 13px;
    margin-bottom: 6px;
    display: flex;
    font-size: 0.8rem;
    color: var(--c-text-gris);
  }
  .h1 {
    font-size: 1.4rem;
    margin: 0.8rem 0;
  }
  @media (min-width: 440px) {
    .inner-wrapper {
      margin: 0 auto;
      max-width: 440px;
    }
  }

  @media (min-width: 720px) {
    .p-info-register {
      font-size: 0.9rem;
    }
    .container-btn-submit {
      justify-content: left;
    }
    .wrapper {
      margin: 3rem 0 8rem;
    }
    .box-left {
      display: block;
      padding: 1.3rem;
      background: var(--bg-box-a);
    }
    .box-right {
      background: var(--bg-box-b);
      box-shadow: 2px 4px 13px 1px #00000000;
      margin-bottom: 0;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
      border-radius: 0;
    }
    .inner-wrapper {
      display: grid;
      grid-template-columns: 230px 1fr;
      max-width: 680px;
      box-shadow: 2px 4px 13px 1px var(--c-shadow-inter);
      border: 1px solid var(--bg-border-inter);
    }
  }
</style>

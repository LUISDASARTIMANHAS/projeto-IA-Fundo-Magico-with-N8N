document.addEventListener("DOMContentLoaded", () => {
  try {
    const form = document.querySelector(".form-group");
    const textArea = document.getElementById("description");
    const htmlCode = document.getElementById("html-code");
    const cssCode = document.getElementById("css-code");
    const preview = document.getElementById("preview-section");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      onSubmit();
    });

    function setLoading(isLoading) {
      const btnGerarBackground = document.getElementById("generate-btn");
      if (isLoading) {
        btnGerarBackground.innerHTML = "Gerando Background...";
        btnGerarBackground.disabled = true;
      } else {
        btnGerarBackground.disabled = false;
        btnGerarBackground.innerHTML = "Gerar background Mágico";
      }
    }

    async function onSubmit() {
      try {
        const description = textArea.value.trim();

        if (!description) {
          return;
        }
        setLoading(true);

        const url =
          "https://pinguinho.ddns.net:5678/webhook/gerador-fundo";
        const payloadLogin = { description };
        const options = {
          method: "POST",
          headers: {
            "content-type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(payloadLogin),
        };

        const response = await fetch(url, options);
        const data = await response.json();

        htmlCode.textContent = data.code || "";
        cssCode.textContent = data.style;

        preview.style.display = "block" || "";
        preview.innerHTML = data.code || "";

        let styleTag = document.getElementById("dynamic-style");
        if (styleTag) styleTag.remove();

        if (data.style) {
          styleTag = document.createElement("style");
          styleTag.id = "dynamic-style";

          styleTag.textContent = data.style;
          document.head.appendChild(styleTag);
        }
      } catch (error) {
        console.error("Erro ao gerar o fundo: ", error);
        htmlCode.innerHTML = "";
        htmlCode.textContent =
          "Não consegui gerar o código HTML, tente novamente, esse sistema requer ipv6";
        cssCode.textContent =
          "Não consegui gerar o código CSS, tente novamente, esse sistema requer ipv6";
        preview.innerHTML = "";
      } finally {
        setLoading(false);
      }
    }
  } catch (error) {
		alert("ERRO FATAL! REPORTE AO ADMINISTRADOR DO SITE. \n Error:" + error);
	}
});

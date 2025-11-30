import { API_KEY, WHATSAPP_BASE_URL } from "../constant/constant";

export const sendWhatsAppMessage = (message: string) => {
  const whatsappURL = `${WHATSAPP_BASE_URL}${encodeURIComponent(
    message
  )}&apikey=${API_KEY}`;

  // eslint-disable-next-line no-undef
  fetch(whatsappURL)
    .then((response) => {
      if (response.ok) {
        console.log("Mensaje enviado correctamente");
      } else {
        console.error("Error al enviar el mensaje");
      }
    })
    .catch((error) => console.error("Error:", error));
};

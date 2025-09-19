// src/utils/contact.ts

/**
 * Limpia un número legible y devuelve solo los dígitos.
 * Ejemplo: "+54 0341 587-3908" → "5403415873908"
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Genera un enlace tel: válido a partir de un número legible.
 * Ejemplo: "+54 0341 587-3908" → "tel:+5403415873908"
 */
export function getTelLink(phone: string): string {
  const clean = cleanPhoneNumber(phone);
  return `tel:+${clean}`;
}

/**
 * Genera un enlace de WhatsApp válido.
 * - `desktop = true` → web.whatsapp.com
 * - `desktop = false` → wa.me
 */
export function getWhatsAppLink(
  phone: string,
  message?: string,
  desktop = false
): string {
  const clean = cleanPhoneNumber(phone);
  const encodedMsg = message ? encodeURIComponent(message) : "";
  return desktop
    ? `https://web.whatsapp.com/send?phone=${clean}${encodedMsg ? `&text=${encodedMsg}` : ""}`
    : `https://wa.me/${clean}${encodedMsg ? `?text=${encodedMsg}` : ""}`;
}

/**
 * Formatea una dirección completa en una sola línea legible.
 */
export function formatFullAddress(address: {
  street: string;
  city: string;
  province: string;
  country: string;
}): string {
  return `${address.street}, ${address.city}, ${address.province}, ${address.country}`;
}

import type { Address } from "./types";

/** Elimina todo lo que no sea dígito */
export function cleanPhoneNumber(phone?: string): string {
  if (!phone) return "";
  return phone.replace(/\D/g, "");
}

export function getTelLink(phone?: string): string {
  const clean = cleanPhoneNumber(phone);
  return clean ? `tel:+${clean}` : "";
}

export function getWhatsAppLink(phone?: string, message?: string, desktop = false): string {
  const clean = cleanPhoneNumber(phone);
  if (!clean) return "#";
  const encodedMsg = message ? encodeURIComponent(message) : "";
  return desktop
    ? `https://web.whatsapp.com/send?phone=${clean}${encodedMsg ? `&text=${encodedMsg}` : ""}`
    : `https://wa.me/${clean}${encodedMsg ? `?text=${encodedMsg}` : ""}`;
}

export function formatFullAddress(address: Address): string {
  return `${address.street}, ${address.city}, ${address.province}, ${address.country}`;
}

// src\contact\adapter.ts
import {
  contact,
  getTelLink,
  formatFullAddress,
  getWhatsAppLink,
  getDefaultPhone,
} from "./contact";
import type { IconName } from "@/config/icons";

export interface ContactItem {
  type: "phone" | "email" | "address" | "schedule" | "social";
  label: string;
  value: string;
  href?: string;
  description?: string;
  icon: IconName;
}

/**
 * Builds contact items for UI components.
 * @param layout 'simple' or 'detailed' rendering mode.
 * @param customContact Optional custom contact source.
 */
export function getContactItems(
  layout: "simple" | "detailed" = "simple",
  customContact = contact
): ContactItem[] {
  const items: ContactItem[] = [];

  /* ------------------------------ Phones ------------------------------ */
  customContact.phones.forEach((phone) => {
    items.push({
      type: "phone",
      label: phone.owner,
      value: phone.number,
      href: getTelLink(phone.id),
      description:
        layout === "detailed" ? phone.whatsappMessage : undefined,
      icon: "phone",
    });
  });

  /* ------------------------------- Email ------------------------------ */
  if (customContact.email) {
    items.push({
      type: "email",
      label: "Email",
      value: customContact.email,
      href: `mailto:${customContact.email}`,
      description:
        layout === "detailed"
          ? "Envíanos tu consulta por correo electrónico."
          : undefined,
      icon: "email",
    });
  }

  /* ------------------------------ Address ----------------------------- */
  if (customContact.address) {
    items.push({
      type: "address",
      label: "Dirección",
      value: formatFullAddress(customContact.address),
      href: customContact.address.mapsLink,
      description:
        layout === "detailed"
          ? `${customContact.address.province}, ${customContact.address.country}`
          : undefined,
      icon: "pointer",
    });
  }

  /* ----------------------------- Schedule ----------------------------- */
  if (customContact.hours?.weekdays) {
    items.push({
      type: "schedule",
      label: "Horarios de atención",
      value: customContact.hours.weekdays,
      description:
        layout === "detailed"
          ? "Consultas online disponibles durante el horario laboral."
          : undefined,
      icon: "time",
    });
  }

  /* ---------------------------- Social Links -------------------------- */
  if (customContact.social) {
    Object.entries(customContact.social).forEach(([key, url]) => {
      if (url) {
        items.push({
          type: "social",
          label: key.charAt(0).toUpperCase() + key.slice(1),
          value: url,
          href: url,
          icon: key as IconName,
        });
      }
    });
  }

  /* ----------------------------- Fallback ----------------------------- */
  if (items.length === 0) {
    const fallback = getDefaultPhone();
    items.push({
      type: "phone",
      label: fallback.owner,
      value: fallback.number,
      href: getWhatsAppLink(fallback),
      description: "Contacto principal",
      icon: "phone",
    });
  }

  return items;
}

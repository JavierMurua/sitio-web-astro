// src/contact/adapter.ts
import { contact, getTelLink, formatFullAddress } from "./contact";
import type { IconName } from "@/config/icons";

/**
 * A generic, UI-ready contact entry.
 * Used by components to display contact info consistently.
 */
export interface ContactItem {
  type: "phone" | "email" | "address" | "schedule";
  label: string;
  value: string;
  href?: string;
  description?: string;
  icon: IconName;
}

/**
 * Returns a list of contact items for display purposes.
 * @param layout Controls whether the output includes descriptions (for “detailed” layouts)
 */
export function getContactItems(
  layout: "simple" | "detailed" = "simple"
): ContactItem[] {
  const items: ContactItem[] = [];

  // --- Phones ---
  contact.phones.forEach((phone) => {
    items.push({
      type: "phone",
      label: phone.owner,
      value: phone.number,
      href: getTelLink(phone.number),
      description:
        layout === "detailed" ? phone.whatsappMessage : undefined,
      icon: "phone",
    });
  });

  // --- Email ---
  if (contact.email) {
    items.push({
      type: "email",
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      description:
        layout === "detailed"
          ? "Envianos tu consulta por correo electrónico."
          : undefined,
      icon: "email",
    });
  }

  // --- Address ---
  items.push({
    type: "address",
    label: "Dirección",
    value: formatFullAddress(contact.address),
    href: contact.address.mapsLink,
    description:
      layout === "detailed"
        ? `${contact.address.province}, ${contact.address.country}`
        : undefined,
    icon: "pointer",
  });

  // --- Schedule ---
  if (contact.hours?.weekdays) {
    items.push({
      type: "schedule",
      label: "Horarios de atención",
      value: contact.hours.weekdays,
      description:
        layout === "detailed"
          ? "Consultas online disponibles."
          : undefined,
      icon: "time",
    });
  }

  return items;
}

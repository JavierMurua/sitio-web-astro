// src/utils/contactAdapter.ts
import { contact } from "@/config/contact";
import type { IconName } from "@/config/icons";

export interface ContactItem {
  type: "phone" | "email" | "address" | "schedule";
  label: string;
  value: string;
  href?: string;
  description?: string;
  icon?: IconName;
}

export function getContactItems(layout: "simple" | "detailed" = "simple"): ContactItem[] {
  const items: ContactItem[] = [];

  if (contact.phone) {
    items.push({
      type: "phone",
      label: layout === "detailed" ? "Teléfono" : "Tel.",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
      description: layout === "detailed" ? "Llamanos para una respuesta inmediata." : undefined,
      icon: "phone",
    });
  }

  if (contact.email) {
    items.push({
      type: "email",
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      description: layout === "detailed" ? "Envianos tu consulta por correo electrónico." : undefined,
      icon: "email",
    });
  }

  if (contact.address) {
    items.push({
      type: "address",
      label: "Dirección",
      value: `${contact.address.street}, ${contact.address.city}`,
      href: contact.address.mapsLink,
      description: layout === "detailed" ? `${contact.address.province}, ${contact.address.country}` : undefined,
      icon: "pointer",
    });
  }

  if (contact.hours?.weekdays) {
    items.push({
      type: "schedule",
      label: "Horarios de atención",
      value: contact.hours.weekdays,
      description: layout === "detailed" ? "Consultas online disponibles." : undefined,
      icon: "time",
    });
  }

  return items;
}

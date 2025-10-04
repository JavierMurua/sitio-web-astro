import { contact } from "./config";
import { getTelLink, formatFullAddress } from "./utils";
import type { IconName } from "@/config/icons";

export interface ContactItem {
  type: "phone" | "email" | "address" | "schedule";
  label: string;
  value: string;
  href?: string;
  description?: string;
  icon: IconName;
}

export function getContactItems(layout: "simple" | "detailed" = "simple"): ContactItem[] {
  const items: ContactItem[] = [];

  if (contact.phone) {
    items.push({
      type: "phone",
      label: layout === "detailed" ? "Teléfono" : "Tel.",
      value: contact.phone,
      href: getTelLink(contact.phone),
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

  items.push({
    type: "address",
    label: "Dirección",
    value: formatFullAddress(contact.address),
    href: contact.address.mapsLink,
    description: layout === "detailed"
      ? `${contact.address.province}, ${contact.address.country}`
      : undefined,
    icon: "pointer",
  });

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

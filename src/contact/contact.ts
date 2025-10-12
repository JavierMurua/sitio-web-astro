// src/contact/contact.ts
export interface Address {
  street: string;
  city: string;
  province: string;
  country: string;
  mapsLink: string;
  embedMapUrl?: string;
}

export interface Phone {
  owner: string;
  number: string; // Formatted number, human-readable
  whatsappMessage: string;
}

export interface ContactHours {
  weekdays: string;
  saturday: string | null;
  sunday: string | null;
}

export interface SocialLinks {
  instagram: string | null;
  facebook: string | null;
  [key: string]: string | null;
}

export interface Contact {
  phones: Phone[];
  email: string | null;
  address: Address;
  hours: ContactHours;
  social: SocialLinks;
}

/**
 * Contact configuration
 * ----------------------
 * Centralized static data used across the site.
 */
export const contact: Contact = {
  phones: [
    {
      owner: "Federico Zalazar",
      number: "+54 9 3415 87-3908",
      whatsappMessage: "Hola, quiero hacer una consulta de salud: ",
    },
    {
      owner: "Daniel Paredes",
      number: "+54 9 3416 63-9485",
      whatsappMessage: "Hola, quiero hacer una consulta laboral: ",
    },
  ],
  email: null,
  address: {
    street: "El Jacarandá 6237",
    city: "Alvear",
    province: "Santa Fe",
    country: "Argentina",
    mapsLink: "https://maps.app.goo.gl/PBsXzMtSTBqJAxuU8",
    embedMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.168875701595!2d-60.69436592344937!3d-33.07834147855386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7af38d1826935%3A0x6bfc770f77fe7eab!2sEl%20Jacarand%C3%A1%206237%2C%20S2126%20La%20Carolina%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1757173354032!5m2!1ses-419!2sar",
  },
  hours: {
    weekdays: "Lunes a Viernes: 9 - 13 | 15 - 19",
    saturday: null,
    sunday: null,
  },
  social: {
    instagram: null,
    facebook: null,
  },
};

/**
 * Domain utilities
 * -----------------
 * These helpers provide small, isolated transformations
 * used internally by the contact module or its adapters.
 */

/** Removes all non-digit characters from a phone number */
export function cleanPhoneNumber(phone?: string): string {
  return phone ? phone.replace(/\D/g, "") : "";
}

/** Generates a 'tel:' link from a phone number */
export function getTelLink(phone?: string): string {
  const clean = cleanPhoneNumber(phone);
  return clean ? `tel:+${clean}` : "";
}

/**
 * Generates a WhatsApp link (mobile or desktop)
 * @param desktop If true, use the web.whatsapp.com version
 */
export function getWhatsAppLink(
  phone?: string,
  message?: string,
  desktop = false
): string {
  const clean = cleanPhoneNumber(phone);
  if (!clean) return "#";
  const encodedMsg = message ? encodeURIComponent(message) : "";
  return desktop
    ? `https://web.whatsapp.com/send?phone=${clean}${
        encodedMsg ? `&text=${encodedMsg}` : ""
      }`
    : `https://wa.me/${clean}${encodedMsg ? `?text=${encodedMsg}` : ""}`;
}

/** Formats a full address into a single readable line */
export function formatFullAddress(address: Address): string {
  return `${address.street}, ${address.city}, ${address.province}, ${address.country}`;
}

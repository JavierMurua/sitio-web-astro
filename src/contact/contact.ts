// src\contact\contact.ts

export interface Address {
  street: string;
  city: string;
  province: string;
  country: string;
  mapsLink: string;
  embedMapUrl?: string;
}

export interface Phone {
  id: string;
  owner: string;
  number: string;
  whatsappMessage: string;
}

export interface ContactHours {
  weekdays: string;
  saturday?: string | null;
  sunday?: string | null;
}

export interface SocialLinks {
  instagram?: string | null;
  facebook?: string | null;
  [key: string]: string | null | undefined;
}

export interface Contact {
  phones: Phone[];
  email?: string | null;
  address: Address;
  hours?: ContactHours;
  social?: SocialLinks;
}

/** Global configuration for formatting and fallbacks */
export const CONTACT_CONFIG = {
  defaultCountryCode: "54",
};

export const contact: Contact = {
  phones: [
    {
      id: "fede",
      owner: "Federico Zalazar",
      number: "+54 9 3415 87-3908",
      whatsappMessage: "Hola, quiero hacer una consulta de salud: ",
    },
    {
      id: "daniel",
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
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6686.374308218738!2d-60.69423717493473!3d-33.077860540795534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7af38d1826935%3A0x6bfc770f77fe7eab!2sEl%20Jacarand%C3%A1%206237%2C%20S2126%20La%20Carolina%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1760447431608!5m2!1ses-419!2sar",
  },
  hours: {
    weekdays: "Lunes a Viernes: 9 - 13 | 15 - 19",
  },
  social: {
    instagram: null,
    facebook: null,
  },
};

/* -------------------------------------------------------------------------- */
/*                                 UTILITIES                                  */
/* -------------------------------------------------------------------------- */

/** Returns the first phone (default) */
export function getDefaultPhone(): Phone {
  return contact.phones[0];
}

/** Finds a phone by semantic ID or falls back to default */
export function getPhoneById(id?: string): Phone {
  if (!id) return getDefaultPhone();
  return contact.phones.find((p) => p.id === id) ?? getDefaultPhone();
}

/** Removes non-digit characters and enforces country code */
export function cleanPhoneNumber(phone?: string): string {
  const digits = phone ? phone.replace(/\D/g, "") : "";
  return digits.startsWith(CONTACT_CONFIG.defaultCountryCode)
    ? digits
    : `${CONTACT_CONFIG.defaultCountryCode}${digits}`;
}

/** Builds a 'tel:' link with optional override */
export function getTelLink(phoneOrId?: string, fallbackPhone?: Phone): string {
  const phone =
    phoneOrId && phoneOrId.startsWith("+")
      ? phoneOrId
      : getPhoneById(phoneOrId)?.number ?? fallbackPhone?.number ?? getDefaultPhone().number;

  const clean = cleanPhoneNumber(phone);
  return clean ? `tel:+${clean}` : "";
}

/** Builds a WhatsApp link (desktop or mobile) with optional override */
export function getWhatsAppLink(
  input?: string | Phone,
  message?: string,
  desktop = false,
  fallbackPhone?: Phone
): string {
  const phone =
    typeof input === "object"
      ? input
      : typeof input === "string"
      ? getPhoneById(input)
      : fallbackPhone ?? getDefaultPhone();

  const clean = cleanPhoneNumber(phone.number);
  const encodedMsg = encodeURIComponent(message || phone.whatsappMessage);

  const base = desktop
    ? `https://web.whatsapp.com/send?phone=${clean}`
    : `https://wa.me/${clean}`;

  return `${base}?text=${encodedMsg}`;
}

/** Returns full formatted address */
export function formatFullAddress(address: Address): string {
  return `${address.street}, ${address.city}, ${address.province}, ${address.country}`;
}

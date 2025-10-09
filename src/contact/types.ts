// src/contact/types.ts
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
  number: string; // número legible
  whatsappMessage: string;
}

export interface Contact {
  phones: Phone[]; // ahora puede tener varios teléfonos
  email: string | null;
  address: Address;
  hours: {
    weekdays: string;
    saturday: string | null;
    sunday: string | null;
  };
  social: {
    instagram: string | null;
    facebook: string | null;
    [key: string]: string | null;
  };
}


export interface Address {
  street: string;
  city: string;
  province: string;
  country: string;
  mapsLink: string;
  embedMapUrl?: string;
}

export interface Contact {
  phone: string; // número legible
  whatsappMessage: string;
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

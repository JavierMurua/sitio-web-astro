// src/data/contact.ts

// ---------------------
// Tipos de datos
// ---------------------
export interface Address {
  street: string;
  city: string;
  province: string;
  country: string;
  fullAddress: string;
  mapsLink: string;
  embedMapUrl?: string; // Opcional para iframe
}

export interface Phone {
  display: string;
  international: string; // formato +543XXX...
}

export interface WhatsApp {
  number: string; // solo números, sin símbolos
  linkMobile: string;
  linkDesktop: string;
}

export interface Hours {
  weekdays: string;
  saturday: string | null;
  sunday: string | null;
}

export interface Social {
  instagram: string | null;
  facebook: string | null;
  [key: string]: string | null; // Para futuras redes
}

export interface ContactInfo {
  address: Address;
  phone: Phone;
  whatsapp: WhatsApp;
  hours: Hours;
  social: Social;
  email: string | null;
}

// ---------------------
// Datos de contacto
// ---------------------
export const contactInfo: ContactInfo = {
  address: {
    street: 'El jacaranda 6237',
    city: 'Alvear',
    province: 'Santa Fe',
    country: 'Argentina',
    fullAddress: 'El jacaranda 6237, Alvear, Santa Fe, Argentina',
    mapsLink: 'https://maps.app.goo.gl/PBsXzMtSTBqJAxuU8',
    embedMapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.168875701595!2d-60.69436592344937!3d-33.07834147855386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7af38d1826935%3A0x6bfc770f77fe7eab!2sEl%20Jacarand%C3%A1%206237%2C%20S2126%20La%20Carolina%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1757173354032!5m2!1ses-419!2sar',
  },
  phone: {
    display: '+54 0341 587-3908',
    international: '+5403415873908',
  },
  whatsapp: {
    number: '5403415873908',
    linkMobile: 'https://wa.me/5403415873908',
    linkDesktop: 'https://web.whatsapp.com/send?phone=5403415873908',
  },
  hours: {
    weekdays: 'Lunes a Viernes: 9 - 13 | 15 - 19',
    saturday: null,
    sunday: null,
  },
  social: {
    instagram: null,
    facebook: null,
  },
  email: null,
};

// ---------------------
// Métodos de contacto
// ---------------------
interface ContactMethod {
  icon: string; // nombre de ícono (FontAwesome, etc.)
  title: string; // título visible
  description: string; // texto visible
  link?: string; // href opcional
  external?: boolean; // abre en _blank
}

export const contactMethodsData: ContactMethod[] = [
  {
    icon: 'map-marked-alt',
    title: 'Dirección',
    description: contactInfo.address.fullAddress,
    link: contactInfo.address.mapsLink,
    external: true,
  },
  {
    icon: 'phone',
    title: 'Teléfono',
    description: contactInfo.phone.display,
    link: `tel:${contactInfo.phone.international}`,
    external: false,
  },
  {
    icon: 'clock',
    title: 'Horario',
    description: contactInfo.hours.weekdays,
    link: contactInfo.address.mapsLink, // opcional
    external: true,
  },
  ...(contactInfo.email
    ? [
        {
          icon: 'envelope',
          title: 'Email',
          description: contactInfo.email,
          link: `mailto:${contactInfo.email}`,
          external: false,
        },
      ]
    : []),
];

// ---------------------
// Enlaces de redes sociales
// ---------------------
export const socialLinks = Object.entries(contactInfo.social)
  .filter(([_, url]) => url !== null)
  .map(([name, url]) => ({
    name, // ej: "instagram"
    url: url as string, // aseguramos que no sea null
  }));

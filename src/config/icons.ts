// Importamos todos como raw string
import whatsappRaw from "../assets/svg/whatsapp.svg?raw";
import ribbonRaw from "../assets/svg/ribbon-mark-1-svgrepo-com.svg?raw";
import timeRaw from "../assets/svg/time.svg?raw";
import pointerRaw from "../assets/svg/placeholder-map-pointer-svgrepo-com.svg?raw";
import emailRaw from "../assets/svg/email-8-svgrepo-com.svg?raw";
import phoneRaw from "../assets/svg/phone.svg?raw";
import pillRaw from "../assets/svg/pill-svgrepo-com.svg?raw";
import wheelchairRaw from "../assets/svg/wheelchair-svgrepo-com.svg?raw";
import brokenLegRaw from "../assets/svg/broken-leg-svgrepo-com.svg?raw";
import carRaw from "../assets/svg/car-svgrepo-com.svg?raw";
import carAltRaw from "../assets/svg/car-svgrepo-com2.svg?raw";
import crutchesRaw from "../assets/svg/crutches-svgrepo-com.svg?raw";
import dnaRaw from "../assets/svg/dna-svgrepo-com.svg?raw";
import familyRaw from "../assets/svg/family-svgrepo-com.svg?raw";
import gavelRaw from "../assets/svg/gavel-svgrepo-com.svg?raw";
import handshakeSlashRaw from "../assets/svg/handshake-slash-svgrepo-com.svg?raw";
import helmetRaw from "../assets/svg/helmet-svgrepo-com.svg?raw";
import legRaw from "../assets/svg/leg-svgrepo-com.svg?raw";
import mechanicalArmRaw from "../assets/svg/mechanical-arm-robotics-svgrepo-com.svg?raw";
import technicianRaw from "../assets/svg/technician-with-helmet-svgrepo-com.svg?raw";

export const icons = {
  // salud
  pill: pillRaw,
  dna: dnaRaw,
  ribbon: ribbonRaw,
  family: familyRaw,
  wheelchair: wheelchairRaw,

  // laboral
  gavel: gavelRaw,
  handshakeSlash: handshakeSlashRaw,
  helmet: helmetRaw,
  technician: technicianRaw,

  // accidentes
  car: carRaw,
  carAlt: carAltRaw,
  brokenLeg: brokenLegRaw,
  leg: legRaw,
  crutches: crutchesRaw,
  mechanicalArm: mechanicalArmRaw,

  // comunicación
  whatsapp: whatsappRaw,
  phone: phoneRaw,
  email: emailRaw,
  pointer: pointerRaw,
  time: timeRaw,
} as const;

export type IconName = keyof typeof icons;

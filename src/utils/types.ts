export type ServiceKey = "seo" | "web" | "automation" | "campaigns" | "content";

export type Fields = {
  name: string;
  email: string;
  phone: string;
  services: Record<ServiceKey, boolean>;
  note: string;
};

export type Errors = Partial<
  Record<"name" | "email" | "phone" | "services", string>
>;
export type Card = {
  t: string;
  d: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

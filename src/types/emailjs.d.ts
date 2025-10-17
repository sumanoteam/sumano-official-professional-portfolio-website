declare module '@emailjs/browser' {
  export interface EmailJSResponse {
    status: number;
    text: string;
  }

  export function send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, any>,
    publicKey: string
  ): Promise<EmailJSResponse>;

  export function init(publicKey: string): void;
}

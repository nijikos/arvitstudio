declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }

  function fbq(...args: any[]): void;
}

export {};

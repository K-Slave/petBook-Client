declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_PY_URL: string;
    NEXT_PUBLIC_SPR_URL: string;
    NEXT_PUBLIC_TESTER: string;
    NEXT_PUBLIC_STORAGE: string;
    TEST_WEBHOOK_URL: string;
    PETBOOK_WEBHOOK_URL: string;
    NEXT_PUBLIC_OWNER: string;
  }
}
interface Window {
  dataLayer: any[];
}

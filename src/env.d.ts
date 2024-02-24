/// <reference types="astro/client" />
interface Window {
  navigator: {
  keyboard: {
    lock: (keys: string[]) => void;
  };
};
  __uv$config: {
    encodeUrl: (url: string) => string;
  };
}
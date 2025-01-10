/// <reference types="vite/client" />

// Add support for jpeg images
declare module '*.jpeg' {
  const value: string;
  export default value;
}
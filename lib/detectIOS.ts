// lib/detectIOS.ts
export const isIOS = (): boolean => {
  const userAgent = window.navigator.userAgent;
  return /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
};

export const isSafari = (): boolean => {
  const userAgent = window.navigator.userAgent;
  return /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
};

export const isIOSSafari = (): boolean => {
  return isIOS() && isSafari();
};

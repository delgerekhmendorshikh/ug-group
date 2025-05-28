import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const readFile = (url: string = ""): string => {
  return `https://dnn-4jdmv.app.erxes.io/gateway/read-file?key=${url}`;
};

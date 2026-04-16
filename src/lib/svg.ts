import { readFileSync } from "fs";
import { join } from "path";

interface Attributes {
    height: string;
}

export const svg = (styles: string, html: string, attributes: Attributes) => {
    return /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <foreignObject width="100%" height='${attributes.height}'>
              <div xmlns="http://www.w3.org/1999/xhtml">
                  <style>${styles}</style>
                  ${html}
              </div>
          </foreignObject>
      </svg>`;
};

export const imageToDataUri = (imagePath: string): string => {
    try {
        const buffer = readFileSync(join(process.cwd(), "public", imagePath));
        const base64 = buffer.toString("base64");
        const mimeType = imagePath.endsWith(".png") ? "image/png" : "image/jpeg";
        return `data:${mimeType};base64,${base64}`;
    } catch {
        return "";
    }
};

export const htmlJoin = (styles: string, html: string) => {
    return `
        <style>${styles}</style>
        ${html}
    `;
};
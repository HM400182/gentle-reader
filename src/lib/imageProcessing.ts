// Client-side image resizing + compression before upload.
// Produces a downscaled "main" image and a small "thumb" from a single source File.

export interface ProcessedImage {
  main: Blob;
  thumb: Blob;
  width: number;
  height: number;
  mime: string;
  ext: string;
}

interface Options {
  maxWidth?: number;     // max width for the main image
  maxHeight?: number;    // max height for the main image
  thumbSize?: number;    // longest edge for the thumbnail
  quality?: number;      // 0..1 JPEG/WebP quality
  mime?: string;         // output mime (jpeg or webp)
}

const loadImage = (file: File): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = (e) => { URL.revokeObjectURL(url); reject(e); };
    img.src = url;
  });

const drawResized = (
  img: HTMLImageElement,
  maxW: number,
  maxH: number,
): HTMLCanvasElement => {
  const ratio = Math.min(maxW / img.width, maxH / img.height, 1);
  const w = Math.round(img.width * ratio);
  const h = Math.round(img.height * ratio);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, w, h);
  return canvas;
};

const canvasToBlob = (canvas: HTMLCanvasElement, mime: string, quality: number): Promise<Blob> =>
  new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("Canvas conversion failed"))),
      mime,
      quality,
    );
  });

export async function processImage(file: File, opts: Options = {}): Promise<ProcessedImage> {
  const {
    maxWidth = 1600,
    maxHeight = 1600,
    thumbSize = 400,
    quality = 0.82,
    mime = "image/jpeg",
  } = opts;

  // Skip processing for SVG/GIF (animation loss / vector) — pass through, still make a thumb.
  if (file.type === "image/svg+xml" || file.type === "image/gif") {
    return {
      main: file,
      thumb: file,
      width: 0,
      height: 0,
      mime: file.type,
      ext: file.name.split(".").pop() || "img",
    };
  }

  const img = await loadImage(file);

  const mainCanvas = drawResized(img, maxWidth, maxHeight);
  const thumbCanvas = drawResized(img, thumbSize, thumbSize);

  const [main, thumb] = await Promise.all([
    canvasToBlob(mainCanvas, mime, quality),
    canvasToBlob(thumbCanvas, mime, 0.75),
  ]);

  const ext = mime === "image/webp" ? "webp" : "jpg";

  return {
    main,
    thumb,
    width: mainCanvas.width,
    height: mainCanvas.height,
    mime,
    ext,
  };
}

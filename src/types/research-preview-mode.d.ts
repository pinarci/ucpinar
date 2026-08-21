declare module "@/content/research-preview-mode.mjs" {
  export function resolveResearchPreview(input: {
    nodeEnv: string | undefined;
    vercelEnv: string | undefined;
    flag: string | undefined;
  }): boolean;
}

export function resolveResearchPreview({ nodeEnv, vercelEnv, flag }) {
  if (flag !== "true" || vercelEnv === "production") return false;
  return nodeEnv === "development" || vercelEnv === "preview";
}

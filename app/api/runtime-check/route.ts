export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  console.info(
    "[runtime-version]",
    JSON.stringify({ node: process.version, brotli: process.versions.brotli })
  );

  return new Response(null, {
    status: 204,
    headers: { "Cache-Control": "no-store" },
  });
}

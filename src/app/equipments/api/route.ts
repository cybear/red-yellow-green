import equipmentList from "@/utils/equipment";

export async function GET() {
  return new Response(JSON.stringify(equipmentList));
}

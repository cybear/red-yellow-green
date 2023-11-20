import equipmentList from "@/utils/equipment";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const equipmentId = url.pathname.split('/').pop();
  const equipment = equipmentList.find(e => e.equipmentId === equipmentId)
  return new Response(JSON.stringify(equipment));
}

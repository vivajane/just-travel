import { activities } from "/data/activities";

export async function GET() {
  return Response.json(activities);
}

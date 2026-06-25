import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return Response.json({ error: "Method not allowed" }, { status: 405 });
    }

    try {
      const body = await request.json();
      const message =
        typeof body.message === "string" ? body.message.trim() : "";

      if (!message || message.length > 2000) {
        return Response.json({ error: "Invalid message" }, { status: 400 });
      }

      await sql`
        INSERT INTO submissions (message)
        VALUES (${message})
      `;

      return Response.json({ saved: true });
    } catch (error) {
      console.error("Message save failed:", error);

      return Response.json(
        { error: "Could not save message" },
        { status: 500 },
      );
    }
  },
};

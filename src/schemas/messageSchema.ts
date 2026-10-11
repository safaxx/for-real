import z from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Message must be atleast 10 characters" })
    .max(400, "Message cannot be longer than 400 characters"),
});

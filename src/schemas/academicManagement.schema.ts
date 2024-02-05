import { z } from "zod";

export const semesterValidationSchema = z.object({
  name: z.string({ required_error: "Semester is required" }),
  year: z.string({ required_error: "Year is required" }),
  startMonth: z.string({ required_error: "Start month is required" }),
  endMonth: z.string({ required_error: "End month is required" }),
});

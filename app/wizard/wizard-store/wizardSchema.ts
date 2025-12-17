import { z } from "zod";

export const wizardSchema = z.object({
  solution: z.string(),
  subSolution: z.string().optional(),
  funnel: z.string(),
  customInstruction1: z.string().optional(),
  customInstruction2: z.string().optional(),
  customInstruction3: z.string().optional(),
  customInstruction4: z.string().optional(),
  whitePaper1: z.string().optional(),
  whitePaper2: z.string().optional(),
  whitePaper3: z.string().optional(),
  whitePaper4: z.string().optional(),
  count: z.string(),
});

export type WizardSchema = z.infer<typeof wizardSchema>;

import { z } from "zod";

export const wizardSchema = z.object({
    solution: z.string(),
    subSolution: z.string(),
    funnel: z.enum(["Brand Awareness", "Demand Generation", "Demand Capture"]),
    quadrants: z.array(
        z.object({
            id: z.string(),
            active: z.boolean(),
            whitepaper: z.string().optional(),
            adCount: z.number().min(1).max(5),
        })
    ),
    customInstructions: z.string().optional()
});

export type WizardSchema =z.infer<typeof wizardSchema>;


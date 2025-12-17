"use client";

import { z } from "zod";
import { wizardSchema } from "../wizardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { solutions } from "@/lib/solution";
import { useWizardStore } from "../store";

const wizardSolutionSchema = wizardSchema.pick({
  solution: true,
  subSolution: true,
});

const solution = solutions;

type WizardSolutionSchema = z.infer<typeof wizardSolutionSchema>;

// Add these type definitions based on your solution structure
type Solution = (typeof solution)[number];
type SubSolution = Solution["subSolution"][number];

// Helper function to check if solution has subSolutions
const hasSubSolutions = (sol: Solution | null): boolean => {
  return sol !== null && sol.subSolution && sol.subSolution.length > 0;
};

// Helper function to check if subSolution selection is required
const isSubSolutionRequired = (sol: Solution | null): boolean => {
  return sol !== null && sol.subSolution && sol.subSolution.length > 1;
};

export default function WizardSolutionForm() {
  const router = useRouter();

  const setData = useWizardStore((state) => state.setData);

  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null
  );
  const [selectedSubSolution, setSelectedSubSolution] =
    useState<SubSolution | null>(null);

  const form = useForm<WizardSolutionSchema>({
    resolver: zodResolver(wizardSolutionSchema),
    defaultValues: {
      solution: "",
      subSolution: "",
    },
  });

  const handleSolutionClick = (sol: Solution) => {
    setSelectedSolution(sol);
    setSelectedSubSolution(null);
    form.setValue("solution", sol.promptValue);
    
    // Auto-select if only one subSolution exists
    if (sol.subSolution && sol.subSolution.length === 1) {
      form.setValue("subSolution", sol.subSolution[0].subPromptValue);
      setSelectedSubSolution(sol.subSolution[0]);
    } else {
      form.setValue("subSolution", "");
    }
    form.clearErrors("solution");
    form.clearErrors("subSolution");
  };

  const handleSubSolutionClick = (subSol: SubSolution) => {
    setSelectedSubSolution(subSol);
    form.setValue("subSolution", subSol.subPromptValue);
    form.clearErrors("subSolution");
  };

  const onSubmit = (data: WizardSolutionSchema) => {
    // Validate subSolution only if required
    if (selectedSolution && isSubSolutionRequired(selectedSolution)) {
      if (!data.subSolution || data.subSolution.trim() === "") {
        form.setError("subSolution", {
          type: "required",
          message: "Please select a sub-solution",
        });
        return;
      }
    }
    
    setData(data);
    router.push("/wizard/funnel");
  };

  return (
    <div className="mt-10">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="solution"
            rules={{ required: "Please select a solution" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg block">
                  Step 1: Select Main Category
                </FormLabel>
                <FormControl>
                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                    {solution.map((sol) => (
                      <Card
                        key={sol.promptValue}
                        className={`cursor-pointer transition-all duration-200 hover:border-neutral-400 w-full aspect-square sm:w-50 sm:h-50 ${
                          selectedSolution?.promptValue === sol.promptValue
                            ? "ring-2 ring-[#FC6F50]"
                            : "hover:shadow-md"
                        }`}
                        onClick={() => handleSolutionClick(sol)}
                      >
                        <CardHeader className="flex flex-col items-center">
                          <div className="p-1.5 border rounded-xl border-neutral-300 ">
                            <sol.icon className="size-22 sm:size-10 " />
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-1">
                          <CardTitle className="tracking-wide font-bold text-3xl sm:text-base">
                            {sol.title.includes("Danelec") ? (
                              <>
                                <span className="text-[#FF4E2A]">Danelec</span>{" "}
                                {sol.title.replace("Danelec ", "")}
                              </>
                            ) : (
                              sol.title
                            )}
                          </CardTitle>
                          <CardDescription className="text-2xl sm:text-xs">
                            {sol.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {selectedSolution && hasSubSolutions(selectedSolution) && (
            <FormField
              control={form.control}
              name="subSolution"
              rules={{
                required: isSubSolutionRequired(selectedSolution)
                  ? "Please select a sub-solution"
                  : false,
              }}
              render={({ field }) => (
                <FormItem className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <FormLabel className="text-lg mt-5 block">
                    Step 2: Select Specific Solution
                    {!isSubSolutionRequired(selectedSolution) && (
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        (Optional)
                      </span>
                    )}
                  </FormLabel>
                  <FormControl>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {selectedSolution.subSolution.map((subSol) => (
                        <Card
                          key={subSol.subPromptValue}
                          className={`cursor-pointer transition-all duration-200 hover:border-neutral-400 w-50 h-50 ${
                            selectedSubSolution?.subPromptValue ===
                            subSol.subPromptValue
                              ? "ring-2 ring-[#FC6F50]"
                              : "hover:shadow-md"
                          }`}
                          onClick={() => handleSubSolutionClick(subSol)}
                        >
                          <CardContent className="space-y-2">
                            <CardTitle className="tracking-wide font-bold">
                              {subSol.title.includes("Danelec") ? (
                                <>
                                  <span className="text-[#FF4E2A]">
                                    Danelec
                                  </span>{" "}
                                  {subSol.title.replace("Danelec ", "")}
                                </>
                              ) : (
                                subSol.title
                              )}
                            </CardTitle>
                            <CardDescription className="text-xs">
                              {subSol.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              className="hover:bg-[#FF4E2A] hover:dark:bg-[#FF4E2A]"
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

{
  /* old working version but with solution and subSolution errors.
"use client";

import { z } from "zod";
import { wizardSchema } from "../wizardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { solutions } from "@/lib/solution";
import { useWizardStore } from "../store";

const wizardSolutionSchema = wizardSchema.pick({
  solution: true,
  subSolution: true,
});

const solution = solutions;

type WizardSolutionSchema = z.infer<typeof wizardSolutionSchema>;



export default function WizardSolutionForm() {
  const router = useRouter();

  const setData = useWizardStore((state) => state.setData);

  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedSubSolution, setSelectedSubSolution] = useState(null);

  const form = useForm<WizardSolutionSchema>({
    resolver: zodResolver(wizardSolutionSchema),
    defaultValues: {
      solution: "",
      subSolution: "",
    },
  });

  const handleSolutionClick = (solution) => {
    setSelectedSolution(solution);
    setSelectedSubSolution(null);
    form.setValue("solution", solution.promptValue);
    form.setValue("subSolution", "");
    form.clearErrors("solution");
  };

  const handleSubSolutionClick = (subSolution) => {
    setSelectedSubSolution(subSolution);
    form.setValue("subSolution", subSolution.subPromptValue);
    form.clearErrors("subSolution");
  };

  const onSubmit = (data: WizardSolutionSchema) => {
    setData(data);
    router.push("/wizard/funnel");
  };

  return (
    <div className="mt-10">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="solution"
            rules={{ required: "Please select a solution" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold block">
                  Step 1: Select Main Category
                </FormLabel>
                <FormControl>
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {solution.map((solution) => (
                      <Card
                        key={solution.promptValue}
                        className={`cursor-pointer transition-all duration-200 hover:border-neutral-400 w-50 h-50 ${
                          selectedSolution?.promptValue === solution.promptValue
                            ? "ring-2 ring-[#FC6F50]"
                            : "hover:shadow-md"
                        }`}
                        onClick={() => handleSolutionClick(solution)}
                      >
                        <CardHeader className="flex flex-col items-center">
                          <div className="p-1.5 border rounded-2xl border-neutral-400 ">
                            <solution.icon className="size-10 " />
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-2">
                          <CardTitle className="tracking-wide font-bold">
                            {solution.title.includes("Danelec") ? (
                              <>
                                <span className="text-[#FF4E2A]">Danelec</span>{" "}
                                {solution.title.replace("Danelec ", "")}
                              </>
                            ) : (
                              solution.title
                            )}
                          </CardTitle>
                          <CardDescription className="text-xs">
                            {solution.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {selectedSolution && (
            <FormField
              control={form.control}
              name="subSolution"
              rules={{ required: "Please select a sub-solution" }}
              render={({ field }) => (
                <FormItem className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <FormLabel className="text-lg font-semibold mt-5 block">
                    Step 2: Select Specific Solution
                  </FormLabel>
                  <FormControl>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {selectedSolution.subSolution.map((subSolution) => (
                        <Card
                          key={subSolution.subPromptValue}
                          className={`cursor-pointer transition-all duration-200 hover:border-neutral-400 w-50 h-50 ${
                            selectedSubSolution?.subPromptValue ===
                            subSolution.subPromptValue
                              ? "ring-2 ring-[#FC6F50]"
                              : "hover:shadow-md"
                          }`}
                          onClick={() => handleSubSolutionClick(subSolution)}
                        >
                          <CardContent className="space-y-2">
                            <CardTitle className="tracking-wide font-bold">
                              {subSolution.title.includes("Danelec") ? (
                                <>
                                  <span className="text-[#FF4E2A]">
                                    Danelec
                                  </span>{" "}
                                  {subSolution.title.replace("Danelec ", "")}
                                </>
                              ) : (
                                subSolution.title
                              )}
                            </CardTitle>
                            <CardDescription className="text-xs">
                              {subSolution.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              className="hover:bg-[#FF4E2A] hover:dark:bg-[#FF4E2A]"
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
*/
}

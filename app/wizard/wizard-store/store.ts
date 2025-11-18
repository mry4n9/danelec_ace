import { create } from "zustand";
import { WizardSchema } from "./wizardSchema";
import { createJSONStorage, persist } from "zustand/middleware";
import { Ad } from "@/types/ad";

type WizardState = Partial<WizardSchema> & {
  ads?: Ad[];
  starredAds?: number[];
  prompt?: string;
  setData: (data: Partial<WizardSchema>) => void;
  setAds: (ads: Ad[]) => void;
  setPrompt: (prompt: string) => void;
  toggleStarred: (index: number) => void;
  isStarred: (index: number) => boolean;
  reset: () => void;
};

export const useWizardStore = create<WizardState>()(
  persist(
    (set, get) => ({
      starredAds: [],
      setData: (data) => set(data),
      setAds: (ads) => set({ ads }),
      setPrompt: (prompt) => set({ prompt }),
      toggleStarred: (index) =>
        set((state) => {
          const starred = state.starredAds || [];
          const newStarred = starred.includes(index)
            ? starred.filter((i) => i !== index)
            : [...starred, index];
          return { starredAds: newStarred };
        }),
      isStarred: (index) => {
        const starred = get().starredAds || [];
        return starred.includes(index);
      },
      reset: () => {
        // Clear localStorage first to ensure old data is removed
        if (typeof window !== "undefined") {
          localStorage.removeItem("wizard-storage");
        }
        // Then set all state to initial/empty values
        // The persist middleware will save this new state
        set({
          ads: undefined,
          starredAds: [],
          prompt: undefined,
          solution: undefined,
          subSolution: undefined,
          funnel: undefined,
          customInstruction1: undefined,
          customInstruction2: undefined,
          customInstruction3: undefined,
          customInstruction4: undefined,
          whitePaper1: undefined,
          whitePaper2: undefined,
          whitePaper3: undefined,
          whitePaper4: undefined,
          count: undefined,
        });
      },
    }),

    {
      name: "wizard-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
  
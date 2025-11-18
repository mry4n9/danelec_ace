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
    }),

    {
      name: "wizard-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
  
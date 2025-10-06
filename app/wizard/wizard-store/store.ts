import { create } from "zustand";
import { WizardSchema } from "./wizardSchema";
import { createJSONStorage, persist } from "zustand/middleware";

type WizardState = Partial<WizardSchema> & {
  setData: (data: Partial<WizardSchema>) => void;
};

export const useWizardStore = create<WizardState>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
    }),

    {
      name: "wizard-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

import { create } from "zustand";

interface WaitlistStore {
  isOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

export const useWaitlistStore = create<WaitlistStore>((set) => ({
  isOpen: false,
  openWaitlist: () => set({ isOpen: true }),
  closeWaitlist: () => set({ isOpen: false }),
}));

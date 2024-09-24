import { create } from 'zustand';

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 10})),
    decrement: () => set((state) => ({ count: state.count - 5})),
    reset: () => set({ count: 0}),

}));

export default useStore;



    


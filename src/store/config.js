import { create } from 'zustand'

const INITIAL_STATE = {
  user: {
    name: undefined,
    email: undefined,
    phone: undefined,
  },
  plan: {
    type: undefined,
    monthly: false
  },
  pick:[],
  step: 1,
}

export const useUserStore = create((set) => ({
  data: INITIAL_STATE,
  updateUser: (values) => set((store) => {
    return {...store, data: {...store.data, user:{...store.data.user, ...values}} } 
  }),
  updatePlan: (values) => set((store) => {
    return {...store, data: {...store.data, plan:{...store.data.plan, ...values}} } 
  }),
  updatePick: (value) => set((store) => {
    if(store.data.pick.includes(value)){
      return { ...store, data: { ...store.data, pick: store.data.pick.filter(item => item !== value) } }
    }else{
      return {...store, data: {...store.data, pick:[...store.data.pick, value]} } }
  }),
  nextStep: () => set((store) => {
     return {...store, data: {...store.data, step: store.data.step + 1}} 
  }),
  prevStep: () => set((store) => {
    return {...store, data: {...store.data, step: store.data.step - 1}} 
  }),
  reset: () => set({ user: INITIAL_STATE}),
}))
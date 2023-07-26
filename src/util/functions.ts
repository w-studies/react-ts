export const filterEmptyEntries = (obj: any) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v))

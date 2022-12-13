import { FormDataType } from './../types';
export const storage = {
 get: (key:string) =>
   window.localStorage.getItem(key)
     ? JSON.parse(window.localStorage.getItem(key) as string)
     : null,
 set: (key: string, value: FormDataType) => window.localStorage.setItem(key, JSON.stringify(value)),
 remove: (key: string) => window.localStorage.removeItem(key)
}

export default storage
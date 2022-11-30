export const SET_LOADING = 'SET_LOADING'
export const SET_AUTH = 'SET_AUTH'
export const SET_NAME = 'SET_NAME'

export const setAuthLoading = (loading: boolean) => {
 return { type: SET_LOADING, payload:loading } as const
}
export const setName = (name: string) => {
 return { type: SET_NAME, payload: name} as const
}

export const setAuth= (isAuth: boolean) => {
 return { type: SET_AUTH, payload: isAuth } as const
}


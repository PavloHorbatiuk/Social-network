export type SideType = typeof initialState

let initialState = {
    SideBar: [
        { id: 1, name: "Andru" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Sveta" },
    ]

}

export const sidebarReducer = (state: SideType = initialState, action: any): typeof initialState => {
    return state;
}


function reducer(state, action){
    switch(action.type){
        case 'add-note':
            const newNote = {
                id: Math.floor(Math.random() * 100),
                message: action.payload.message,
                title: action.payload.title,
                done: false
            }
            const newListOfNotesAddedOne = [...state.lstTask, newNote]
            const newStateAddNote = {
                ...state, lstTask: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
            return state
        case 'update-note':
            return state
    }
}

export default reducer
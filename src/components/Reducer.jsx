function reducer(state, action){
    switch(action.type){
        case 'add-note':
            const newNote = {
                id: Math.floor(Math.random() * 100),
                message: action.payload.message,
                title: action.payload.title,
                done: false
            };
            const newListOfNotesAddedOne = [...state.lstTask, newNote];
            const newStateAddNote = {
                ...state, lstTask: newListOfNotesAddedOne
            };
            return newStateAddNote;
        case 'remove-note':
            const newLstTaskWithoutPayloadNote = state.lstTask.filter(note => note.id !== action.payload.id);
            const newStateWithNoteDeleted = {...state, lstTask: newLstTaskWithoutPayloadNote};
            return newStateWithNoteDeleted;
        case 'update-note':
            const newlstTask = state.lstTask.filter(note => note.id !== action.payload.id);
            const newlstTaskWithModification = [...newlstTask, action.payload];
            const newStateModifiedCheckbox = {...state, lstTask: newlstTaskWithModification};

            return newStateModifiedCheckbox;
    }
}

export default reducer
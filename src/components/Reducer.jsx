function reducer(state, action){
    switch(action.type){

        case 'get-notes':
            const stateWithAllNotes = {
                ...state,
                lstNotes: action.payload
            }
            return stateWithAllNotes;

        case 'add-note':
            const newNote = {
                id: Math.floor(Math.random() * 100),
                message: action.payload.message,
                title: action.payload.title,
                done: false
            };
            const newListOfNotesAddedOne = [...state.lstNotes, newNote];
            const newStateAddNote = {
                ...state, lstNotes: newListOfNotesAddedOne
            };
            return newStateAddNote;

        case 'remove-note':
            const newlstNotesWithoutPayloadNote = state.lstNotes.filter(note => note.id !== action.payload.id);
            const newStateWithNoteDeleted = {...state, lstNotes: newlstNotesWithoutPayloadNote};
            return newStateWithNoteDeleted;

        case 'update-note':
            const newlstNotes = state.lstNotes.filter(note => note.id !== action.payload.id);
            const newlstNotesWithModification = [...newlstNotes, action.payload];
            const newStateModifiedCheckbox = {...state, lstNotes: newlstNotesWithModification};

            return newStateModifiedCheckbox;
    }
}

export default reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Announcement, AnnouncementState } from './type';

const initialState: AnnouncementState = {
    announcements: [],
};

const announcementSlice = createSlice({
    name: 'announcements',
    initialState,
    reducers: {
        setAnnouncements: (state, action: PayloadAction<Announcement[]>) => {
            state.announcements = action.payload;
        },
        addAnnouncement: (state, action: PayloadAction<Announcement>) => {
            state.announcements.push(action.payload);
        },
        deleteAnnouncement: (state, action: PayloadAction<string>) => {
            state.announcements = state.announcements.filter(
                (announcement) => announcement.id !== action.payload
            );
        },
    },
});

// Export actions
export const { setAnnouncements, addAnnouncement, deleteAnnouncement } = announcementSlice.actions;

// Export reducer
export default announcementSlice.reducer;

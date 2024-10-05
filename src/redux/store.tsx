import { configureStore } from '@reduxjs/toolkit';
import announcementReducer from './announcementReducer';
import quizReducer from './quizReducer';

const store = configureStore({
    reducer: {
        announcements: announcementReducer,
        quizzes: quizReducer,
    },
});

export default store;

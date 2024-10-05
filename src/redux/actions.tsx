import { Announcement, Quiz } from './type';

export const SET_ANNOUNCEMENTS = 'SET_ANNOUNCEMENTS';
export const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT';
export const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';

export const SET_QUIZZES = 'SET_QUIZZES';
export const ADD_QUIZ = 'ADD_QUIZ';
export const DELETE_QUIZ = 'DELETE_QUIZ';

export const setAnnouncements = (announcements: Announcement[]) => ({
    type: SET_ANNOUNCEMENTS,
    payload: announcements,
});

export const addAnnouncement = (announcement: Announcement) => ({
    type: ADD_ANNOUNCEMENT,
    payload: announcement,
});

export const deleteAnnouncement = (id: string) => ({
    type: DELETE_ANNOUNCEMENT,
    payload: id,
});

export const setQuizzes = (quizzes: Quiz[]) => ({
    type: SET_QUIZZES,
    payload: quizzes,
});

export const addQuiz = (quiz: Quiz) => ({
    type: ADD_QUIZ,
    payload: quiz,
});

export const deleteQuiz = (id: string) => ({
    type: DELETE_QUIZ,
    payload: id,
});

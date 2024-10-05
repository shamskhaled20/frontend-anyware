export interface Announcement {
    id: string; // Changed from id to _id
    title: string;
    content: string;
}
export interface Quiz {
    id: string;
    question: string;
    options: string[];
    answer: string;
}

export interface AnnouncementState {
    announcements: Announcement[];
}

export interface QuizState {
    quizzes: Quiz[];
}

export interface RootState {
    announcements: AnnouncementState;
    quizzes: QuizState;
}

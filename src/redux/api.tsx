import axios from 'axios';
import { Announcement, Quiz } from './type';

const API_URL = 'http://localhost:8080/api'; 


export const fetchAnnouncements = async (): Promise<Announcement[]> => {
    try {
        const response = await axios.get<{ results: number; data: Announcement[] }>(`${API_URL}/announcements/list`);
        return response.data.data; // Access the correct property
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching announcements:', error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.message || 'Failed to fetch announcements');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occurred');
        }
    }
};


export const createAnnouncement = async (announcement: Omit<Announcement, 'id'>) => {
    const response = await axios.post<Announcement>(`${API_URL}/announcements/create`, announcement);
    return response.data;
};


export const deleteAnnouncementApi = async (id: string) => {
    await axios.delete(`${API_URL}/announcements/${id}`);
};

export const fetchQuizzes = async () => {
    const response = await axios.get<Quiz[]>(`${API_URL}/quizzes`);
    return response.data;
};

export const createQuiz = async (quiz: Omit<Quiz, 'id'>) => {
    const response = await axios.post<Quiz>(`${API_URL}/quizzes`, quiz);
    return response.data;
};

export const deleteQuizApi = async (id: string) => {
    await axios.delete(`${API_URL}/quizzes/${id}`);
};

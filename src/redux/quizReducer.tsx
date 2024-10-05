import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quiz, QuizState } from './type';

const initialState: QuizState = {
    quizzes: [],
};

const quizSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        setQuizzes: (state, action: PayloadAction<Quiz[]>) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, action: PayloadAction<Quiz>) => {
            state.quizzes.push(action.payload);
        },
        deleteQuiz: (state, action: PayloadAction<string>) => {
            state.quizzes = state.quizzes.filter(
                (quiz) => quiz.id !== action.payload
            );
        },
    },
});

// Export actions
export const { setQuizzes, addQuiz, deleteQuiz } = quizSlice.actions;

// Export reducer
export default quizSlice.reducer;

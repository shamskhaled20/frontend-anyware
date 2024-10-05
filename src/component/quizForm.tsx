import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuiz } from '../redux/api';
import { addQuiz } from '../redux/actions';

const QuizForm: React.FC = () => {
    const [question, setQuestion] = useState<string>('');
    const [options, setOptions] = useState<string[]>(['', '', '', '']);
    const [answer, setAnswer] = useState<string>('');
    const dispatch = useDispatch();

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newQuiz = await createQuiz({ question, options, answer });
        dispatch(addQuiz(newQuiz));
        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg">
            <h2 className="text-2xl mb-4">Create Quiz</h2>
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
                required
            />
            {options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="w-full mb-2 p-2 border rounded"
                    required
                />
            ))}
            <input
                type="text"
                placeholder="Correct Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Quiz</button>
        </form>
    );
};

export default QuizForm;

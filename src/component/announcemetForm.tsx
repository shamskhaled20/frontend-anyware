import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAnnouncement } from '../redux/api';
import { addAnnouncement } from '../redux/actions';

const AnnouncementForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newAnnouncement = await createAnnouncement({ title, content });
        dispatch(addAnnouncement(newAnnouncement));
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg">
            <h2 className="text-2xl mb-4">Create Announcement</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Announcement</button>
        </form>
    );
};

export default AnnouncementForm;

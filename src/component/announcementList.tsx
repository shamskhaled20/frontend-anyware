import React, { useEffect, useState } from 'react';
import { fetchAnnouncements } from '../redux/api'; // Adjust the import based on your file structure
import { Announcement } from '../redux/type'; // Ensure the correct import for types

const AnnouncementList: React.FC = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadAnnouncements = async () => {
            try {
                const data = await fetchAnnouncements();
                setAnnouncements(data);
            } catch (err) {
                const errorMessage = (err as Error).message || 'Failed to fetch announcements';
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        loadAnnouncements();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="mr-6 ml-6 z-0 bg-white shadow-lg p-6 justify-start">
            <h3 className="text-3xl font-bold text-blue-600">Announcements</h3>
            {announcements.length > 0 ? (
                <div className="mx-auto my-5 w-full max-w-4xl px-5">
                    <div className="overflow-hidden rounded-lg">
                        <table className="min-w-full border-collapse w-full">
                            <tbody className="bg-white">
                                {announcements.map((announcement) => (
                                    <React.Fragment key={announcement.id}>
                                        <tr>
                                            <td className="px-4 py-2 text-lg text-big-text-color font-bold">Title</td>
                                            <td className="py-2 text-lg">{announcement.title}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 text-lg text-big-text-color font-bold">Content</td>
                                            <td className="py-2 text-lg">{announcement.content}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p>No announcements available.</p>
            )}
        </div>
    );
};

export default AnnouncementList;

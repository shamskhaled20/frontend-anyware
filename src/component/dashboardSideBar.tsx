import React, { useState } from 'react';
import {
  HomeIcon,
  BookOpenIcon,
  ViewColumnsIcon,
  AcademicCapIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const SidebarDashBoard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('dashboard');

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="flex">
      <div className="border border-primary-color rounded-custom w-64 bg-custom-gradient h-screen">
        <div className="p-4 text-2xl font-semibold text-big-text-color">
          Coligo
        </div>
        <ul className="p-2">
          <li
            className={`flex items-center px-4 py-6 text-big-text-color hover:bg-white hover:text-black cursor-pointer ${
              selectedMenuItem === 'dashboard' ? 'bg-custom-gradient-div' : ''
            }`}
            onClick={() => handleMenuItemClick('dashboard')}
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Dashboard
          </li>
          <li
            className={`flex items-center px-4 py-6 text-big-text-color hover:bg-white hover:text-black cursor-pointer ${
              selectedMenuItem === 'book' ? 'bg-custom-gradient-div' : ''
            }`}
            onClick={() => handleMenuItemClick('book')}
          >
            <BookOpenIcon className="h-5 w-5 mr-2" />
            Schedule
          </li>
          <li
            className={`flex items-center px-4 py-6 text-big-text-color hover:bg-white hover:text-black cursor-pointer ${
              selectedMenuItem === 'Courses' ? 'bg-custom-gradient-div' : ''
            }`}
            onClick={() => handleMenuItemClick('Courses')}
          >
            <ViewColumnsIcon className="h-5 w-5 mr-2" />
            Courses
          </li>
          <li
            className={`flex items-center px-4 py-6 text-big-text-color hover:bg-white hover:text-black cursor-pointer ${
              selectedMenuItem === 'Instructor' ? 'bg-custom-gradient-div' : ''
            }`}
            onClick={() => handleMenuItemClick('Instructor')}
          >
            <AcademicCapIcon className="h-5 w-5 mr-2" />
            Gradebook
          </li>
          <li
            className={`flex items-center px-4 py-6 text-big-text-color hover:bg-white hover:text-black cursor-pointer ${
              selectedMenuItem === 'Company' ? 'bg-custom-gradient-div' : ''
            }`}
            onClick={() => handleMenuItemClick('Company')}
          >
            <StarIcon className="h-5 w-5 mr-2" />
            Performance
          </li>
          <li
            className={`flex items-center px-4 py-6 text-big-text-color hover:bg-white hover:text-black cursor-pointer ${
              selectedMenuItem === 'Announcements' ? 'bg-custom-gradient-div' : ''
            }`}
            onClick={() => handleMenuItemClick('Announcements')}
          >
            <StarIcon className="h-5 w-5 mr-2" />
            Announcements
          </li>
        </ul>
      </div>

      {selectedMenuItem === 'dashboard' && (
        <div className="">
          {/* <DashboardCard /> */}
        </div>
      )}

      {selectedMenuItem === 'Announcements' && (
        <div className="">
          {/* <AnnouncementsView /> */}
        </div>
      )}
    </div>
  );
};

export default SidebarDashBoard;

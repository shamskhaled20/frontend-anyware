import React from 'react';
import DashBoradSideBar from '../component/dashboardSideBar';
import Header from '../component/header';
import  Exam  from '../component/exam';
import AnnouncementList from '../component/announcementList';
const Home =()=>{
    return (
        <div className="App">
        <div className='flex '>
        <DashBoradSideBar/>
      <div className='mx-4'>
      <Header/>
      < Exam />
      <AnnouncementList/>
      </div>
    
        </div>
        </div>
    )
}
export default Home;
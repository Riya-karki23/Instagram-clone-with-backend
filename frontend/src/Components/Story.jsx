import React, { useState } from 'react';

function Story() {
  const [image, setImage] = useState('');

  const stories = [
    {
      name: 'Riya',
      dp: 'https://images.unsplash.com/photo-1505318985551-5793f4a707bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFuJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
      story: 'https://images.unsplash.com/photo-1521116776539-047966854bcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80',
    },
    {
      name: 'Kavita',
      dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN81N2IkIB_1P-IXya8ME7KLArG4Vxsb-XA&usqp=CAU',
      story: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXjLYKzJRkoa_M3D_H_bIWRAdecIjbVVXluqavG7Tu_YXlOyBLHVs1vVUmLPfZa9UrwE&usqp=CAU',
    },
    {
      name: 'rk',
      dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP82GGVr9kSi29LsvECAst0lcZ0ZVXGyFAdQ&usqp=CAU',
      story: 'https://images.pexels.com/photos/2197637/pexels-photo-2197637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'lucky',
      dp: 'https://i.pinimg.com/originals/42/29/25/422925348dba8988fb7b1e5e7a45f829.jpg',
      story: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyJn2mDFmwe5tM_BtRf--Nt72ILjILfSPvyWvRnEUteZOmBLwqGjN13P_HWVHGo8PWmE&usqp=CAU',
    },
    {
      name: 'siya',
      dp: 'https://dpemoji.com/wp-content/uploads/2023/01/Girls-Attitude-DP-1.png',
      story: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYLbaEeLbLZDPgYkpAMvBCBf_ATaGoWPH6zyIIjRkzJE36wXDGlw7x4bkHZeNvGI2fo4&usqp=CAU',
    },
  ];

  function showStory(story) {
    setImage(story);
    setTimeout(() => {
      setImage('');
    }, 3000);
  }

  return (
    <>
      <div className='flex gap-6 my-10 ml-[28rem] w-[30rem]'>
        <div className="relative flex flex-col items-center cursor-pointer">
          <div className="w-16 h-16 p-1 bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full">
            <img className="w-full h-full bg-white rounded-full object-cover" src="https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="story image" />
          </div>
          <span className="mt-2 text-gray-200 text-md select-none">Add story</span>
          <button className="absolute right-1 bottom-9 flex items-center justify-center w-5 h-5 p-1 bg-blue-500 text-white rounded-full border-2 border-white">+</button>
        </div>

        {stories.map((data, index) => (
          <div key={index} onClick={() => showStory(data.story)} className="relative flex flex-col items-center cursor-pointer">
            <div className="w-16 h-16 p-1 bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full">
              <img className="w-full h-full bg-white rounded-full object-cover" src={data.dp} alt="story image" />
            </div>
            <div className="mt-2 text-gray-200 text-md select-none">{data.name}</div>
          </div>
        ))}
      </div>

      {image && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <img className="max-w-full max-h-full h-[32rem] object-contain" src={image} alt="Full-screen story" />
        </div>
      )}
    </>
  );
}

export default Story;

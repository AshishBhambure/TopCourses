import React, { useEffect, useState } from 'react';
import { apiUrl } from '../data';
import Card from './Card';
import Loader from './Loader';
import { toast } from 'react-toastify';

function Cards({ filter }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const result = await fetch(apiUrl);
      const data = await result.json();
      setLoading(false);

      if (filter !== 'All') {
        for (let key in data.data) {
          if (key === filter) {
            setCards([]);
            setCards(data.data[key]);
          }
        }
      } else {
        let filterData = [];
        for (let key in data.data) {
          for (let val of data.data[key]) {
            filterData.push(val);
          }
        }
        setCards([]);
        setCards(filterData);
      }
    }

    loadData();
  }, [filter]);

  function handleLike(course) {
    if (likedCourses.includes(course.id)) {
      setLikedCourses(prevData => prevData.filter(c => c !== course.id));
      toast.error('Like Removed !');
    } else {
      setLikedCourses(prevData => [...prevData, course.id]);
      toast.success('Like Added !');
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen w-full max-w-screen-xl flex flex-wrap justify-center items-center gap-4 p-4 mx-auto">
      {cards.map(c => (
        <Card
          key={c.id}
          card={c}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
}

export default Cards;

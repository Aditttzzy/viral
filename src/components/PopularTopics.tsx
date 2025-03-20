
import React from 'react';
import { Link } from 'react-router-dom';

interface PopularTopic {
  id: string;
  name: string;
  tag: string;
}

const topics: PopularTopic[] = [
  { id: '1', name: 'Banjir Jakarta', tag: '#BanjirJakarta' },
  { id: '2', name: 'Anak Pejabat', tag: '#AnakPejabat' },
  { id: '3', name: 'BRI Liga 1', tag: '#BRILIGA1' },
  { id: '4', name: 'Raffi Ahmad', tag: '#RaffiAhmad' },
  { id: '5', name: 'Trans TV', tag: '#TRANSTV' },
];

const PopularTopics = () => {
  return (
    <div className="bg-gray-200 rounded-xl p-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-brandRed mb-4">TOPIK POPULER</h2>
      <div className="space-y-3">
        {topics.map((topic) => (
          <Link 
            key={topic.id} 
            to={`/topic/${topic.id}`}
            className="block"
          >
            <span className="text-gray-800 font-medium hover:text-brandPurple transition-colors">
              {topic.tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;

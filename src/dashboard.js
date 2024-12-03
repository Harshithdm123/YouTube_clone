// import React from "react";
import React, { useState } from "react";

import "./dashboard.css";
import { FaHome, FaHistory, FaBars, FaPlayCircle, FaRegClock } from "react-icons/fa";
import { MdSubscriptions, MdLibraryBooks, MdPlaylistPlay, MdThumbUp } from "react-icons/md";

const videos = [
  {
    id: 1,
    title: "Core Java Tutorial",
    thumbnail: "https://img.youtube.com/vi/1H4Y1ZkwR-E/hqdefault.jpg",
    url: "https://www.youtube.com/embed/1H4Y1ZkwR-E",
  },
  {
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },{
    id: 2,
    title: "React Basics",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  // Add more video objects as needed
];


function Dashboard() {
  const categories = ["All", "Music", "Gaming", "News", "Learning", "Live"];
  const [searchQuery, setSearchQuery] = useState("");

  // Filter videos based on the search query
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">
          <FaBars /> YouTube Clone
        </h2>
        <ul>
          <li>
            <FaHome className="icon" /> Home
          </li>
          <li>
            <MdSubscriptions className="icon" /> Subscriptions
          </li>
          <li>
            <MdLibraryBooks className="icon" /> Library
          </li>
          <li>
            <FaHistory className="icon" /> History
          </li>
          <li>
            <MdPlaylistPlay className="icon" /> Playlist
          </li>
          <li>
            <FaRegClock className="icon" /> Watch Later
          </li>
          <li>
            <MdThumbUp className="icon" /> Liked Videos
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Welcome to YouTube</h1>
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query state
          />
        </header>

        {/* Toolbar */}
        <div className="toolbar">
          {categories.map((category, index) => (
            <button key={index} className="toolbar-button">
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div className="video-card" key={video.id}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="video-thumbnail"
                />
                <h3>{video.title}</h3>
                <button
                  onClick={() =>
                    window.open(video.url, "_blank", "noopener,noreferrer")
                  }
                >
                  <FaPlayCircle className="play-icon" /> Play
                </button>
              </div>
            ))
          ) : (
            <p>No videos found for "{searchQuery}"</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
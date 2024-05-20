import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  useEffect(() => {
    authService.getCurrentUser().then((res) => setUser(res));
  }, []);

  if (posts.length === 0 && user) {
    return (
      <div className="flex justify-center items-center min-h-screen py-8">
        <Container>
          <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full text-center">
              <h1
                className="text-3xl font-bold text-gray-800 transform transition duration-300 hover:shadow-none"
                style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
              >
                Hi👋{user.name}. <br />
                It seems we do not have any blog posts currently but why to wait
                ?
                <br />
                <Link to="/add-post" className="hover:text-blue-500">
                  "Take control with a keystroke and start composing your next
                  blog post".
                </Link>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  if (posts.length === 0 && !user) {
    return (
      <div className="flex justify-center items-center min-h-screen py-8">
        <Container>
          <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full text-center">
              <h1
                className="text-3xl font-bold text-gray-800 hover:text-blue-500 transform transition duration-300 hover:scale-105 hover:shadow-none"
                style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
              >
                Hi👋Guest. <br />
                Interested to read and write some blogs? Please login or create
                an account if you haven't.
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8 px-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

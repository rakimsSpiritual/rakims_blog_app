import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=unajimu"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Unajimu
        </Link>
        <Link
          to="/posts?cat=nyota"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          NyotA
        </Link>
        <Link
          to="/posts?cat=mahusiano"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Mahusiano
        </Link>
        <Link
          to="/posts?cat=makala"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Makala
        </Link>
        <Link
          to="/posts?cat=historia"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Historia
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search/>
    </div>
  );
};

export default MainCategories;

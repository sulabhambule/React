import React, { useEffect, useState } from "react";
import data from "../api/blogsData.json";
import BlogCards from "./BlogCards";
import { Pagination } from "@mui/material";

const BlogPage = () => {
  const [blogs, setBlogs] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      {/** categorry section */}
      <div>
        <Pagination/>
      </div>

      {/** blogCards section */}
      <div>
        <BlogCards blogs={blogs} />
      </div>

      {/** pagination */}
      <div>
        Pagination
      </div>
    </div>
  );
};

export default BlogPage;

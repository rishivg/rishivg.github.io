import Button from "../../General/Button";

const Blog = ({ blog }) => {
  const openBlog = () => {
    window.open(blog.link, "_blank");
  };

  return (
    <div className={`project-card ${blog.show ? "" : "hide-card"}`}>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

export default Blog;

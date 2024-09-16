import blogsData from "../../assets/data/blogs.json";

const Blogs = () => {
  return (
    <div className="pb-10 inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]  pb-6">
      <section className="section__container blog__container">
        <h2 className="section__header">Latest From Blog</h2>
        <p className="section__subheader pb-12">
          Discover a curated collection of exquisite clothing, accessories, and
          footwear, all handpicked to elevate your wardrobe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogsData.map((blog, idx) => (
            <div
              key={idx}
              className="blog__card cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <img src={blog.imageUrl} alt="blog image" />
              <div className="blog__card__content">
                <h6>{blog.subtitle}</h6>
                <h4>{blog.title}</h4>
                <p>{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;

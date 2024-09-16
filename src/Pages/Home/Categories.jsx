import { Link } from "react-router-dom";
import cat1 from "../../assets/category-1.jpg";
import cat2 from "../../assets/category-2.jpg";
import cat3 from "../../assets/category-3.jpg";
import cat4 from "../../assets/category-4.jpg";

const Categories = () => {
  const categories = [
    { name: "Accessories", path: "accessories", image: cat1 },
    { name: "Dress Collection", path: "dress", image: cat2 },
    { name: "Jewelry", path: "jewellery", image: cat3 },
    { name: "Cosmetics", path: "cosmetics", image: cat4 },
  ];
  return (
    <div className="border border-primary-light  inset-0 -z-10 h-full w-full bg-primary-light bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    
      <div className="product__grid ">
        {categories.map((category, idx) => (
          <Link
            key={idx}
            to={`categories/${category.path}`}
            className="categories__card"
          >
            <img src={category.image} alt={category.name} />
            <h4>{category.name} </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

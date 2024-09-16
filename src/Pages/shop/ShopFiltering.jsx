import PropTypes from "prop-types";

const ShopFiltering = ({
  filter,
  filteredState,
  setFilteredState,
  clearFilters,
}) => {
  return (
    <div className="space-y-5 flex-shrink-0 bg-extra-light p-6 rounded-lg ">
      <h3 className="text-2xl font-semibold text-gray-800">Filters</h3>
      {/* Category Filter */}
      <div className="flex flex-col space-y-4">
        <h4 className="font-medium text-lg text-gray-700">Category</h4>
        <hr />
        {filter.categories.map((category) => (
          <label
            key={category}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <input
              type="radio"
              name="category"
              id={category}
              value={category}
              checked={filteredState.category === category}
              onChange={(e) =>
                setFilteredState({ ...filteredState, category: e.target.value })
              }
              className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 border-blue-300"
            />
            <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors">
              {category}
            </span>
          </label>
        ))}
      </div>
      {/* color filter */}
      <div className="flex flex-col space-y-4">
        <h4 className="font-medium text-lg text-gray-700">Color</h4>
        <hr />
        {filter.colors.map((color) => (
          <label
            key={color}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <input
              type="radio"
              name="color"
              id={color}
              value={color}
              checked={filteredState.color === color}
              onChange={(e) =>
                setFilteredState({ ...filteredState, color: e.target.value })
              }
              className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 border-blue-300"
            />
            <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors">
              {color}
            </span>
          </label>
        ))}
      </div>
      {/* price filter */}
      <div className="flex flex-col space-y-4">
        <h4 className="font-medium text-lg text-gray-700">Price</h4>
        <hr />
        {filter.priceRanges.map((range) => (
          <label
            key={range.label}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <input
              type="radio"
              name="priceRanges"
              id="priceRanges"
              value={`${range.min}-${range.max}`}
              checked={filteredState.priceRange === `${range.min}-${range.max}`}
              onChange={(e) =>
                setFilteredState({
                  ...filteredState,
                  priceRange: e.target.value,
                })
              }
              className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500 border-blue-300"
            />
            <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors">
              {range.label}
            </span>
          </label>
        ))}
      </div>

      {/* clear filter */}
      <button
        onClick={clearFilters}
        className="bg-primary py-1 px-4 text-white rounded"
      >
        Clear All Filters
      </button>
    </div>
  );
};

ShopFiltering.propTypes = {
  filter: PropTypes.object.isRequired,
  filteredState: PropTypes.object.isRequired,
  clearFilters: PropTypes.func,
  setFilteredState: PropTypes.func,
};

export default ShopFiltering;

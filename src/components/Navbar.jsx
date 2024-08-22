import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("lowToHigh");
  const [selectedDate, setSelectedDate] = useState("newestFirst");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRange, setSelectedRange] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Send the search query to the backend
    console.log("Search Query:", searchQuery);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleRangeChange = (e) => {
    setSelectedRange(e.target.value);
  };

  const handleFilterSubmit = () => {
    // Collect filter data and send it to the backend
    console.log("Filters applied:", {
      selectedBrand,
      selectedCategory,
      selectedRange,
      selectedPrice,
      selectedDate,
    });
    // Optionally, close the drawer here if needed
  };

  return (
    <div className="drawer z-10">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <div className="navbar bg-base-100 flex justify-center items-center flex-wrap">
          <div className="flex-1 flex justify-between items-center w-full md:w-auto">
            <a className="btn btn-ghost text-xl">eMart</a>
            <div className="form-control flex flex-grow md:flex-grow-0 md:ml-2">
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  className="input input-bordered w-full md:w-auto border-r-0 rounded-r-none focus:outline-none"
                />
                <button
                  className="btn btn-square rounded-l-none"
                  onClick={handleSearchSubmit}
                >
                  <CiSearch className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-2">
            <label htmlFor="my-drawer-2" className="btn">
              <FaFilter className="text-xl" />
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <h2 className="text-lg font-bold">Filter Options</h2>
          <div className="form-control my-4">
            <label className="label font-semibold">Brand Name</label>
            <select
              className="select select-bordered"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="" disabled>
                Select brand
              </option>
              <option value="Nokia">Nokia</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Sony">Sony</option>
              <option value="LG">LG</option>
            </select>
          </div>
          <div className="form-control my-4">
            <label className="label font-semibold">Category Name</label>
            <select
              className="select select-bordered"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="TV">TV</option>
              <option value="Laptop">Laptop</option>
              <option value="Tablet">Tablet</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Camera">Camera</option>
            </select>
          </div>
          <div className="form-control my-4">
            <label className="label font-semibold">Price Range</label>
            <select
              className="select select-bordered"
              value={selectedRange}
              onChange={handleRangeChange}
            >
              <option value="" disabled>
                Select price range
              </option>
              <option value="0-5000">0 - 5000</option>
              <option value="5000-10000">5000 - 10000</option>
              <option value="10000-20000">10000 - 20000</option>
              <option value="20000-50000">20000 - 50000</option>
              <option value="50000-100000">50000 - 100000</option>
              <option value="100000-Max">100000 - Max</option>
            </select>
          </div>
          <h2 className="text-lg font-bold mt-3">Sort Options</h2>
          <div className="form-control my-4">
            <label className="label font-semibold">Price</label>
            <div className="flex flex-col space-y-2">
              <label className="cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="price"
                  value="lowToHigh"
                  checked={selectedPrice === "lowToHigh"}
                  onChange={handlePriceChange}
                  className="radio radio-sm"
                />
                <span className="ml-2">Low to High</span>
              </label>
              <label className="cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="price"
                  value="highToLow"
                  checked={selectedPrice === "highToLow"}
                  onChange={handlePriceChange}
                  className="radio radio-sm"
                />
                <span className="ml-2">High to Low</span>
              </label>
            </div>
          </div>
          <div className="form-control my-4">
            <label className="label font-semibold">Date</label>
            <div className="flex flex-col space-y-2">
              <label className="cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="date"
                  value="newestFirst"
                  checked={selectedDate === "newestFirst"}
                  onChange={handleDateChange}
                  className="radio radio-sm"
                />
                <span className="ml-2">Newest first</span>
              </label>
              <label className="cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="date"
                  value="oldestFirst"
                  checked={selectedDate === "oldestFirst"}
                  onChange={handleDateChange}
                  className="radio radio-sm"
                />
                <span className="ml-2">Oldest first</span>
              </label>
            </div>
          </div>
          <button
            className="btn btn-primary mt-4 w-full"
            onClick={handleFilterSubmit}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

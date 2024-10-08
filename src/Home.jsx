import { useEffect, useState } from "react";
import Product from "./components/Product/Product";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaFilter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const {user, userSignOut} = useAuth()
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRange, setSelectedRange] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/count?search=${searchQuery}&brand=${selectedBrand}&category=${selectedCategory}&range=${selectedRange}`)
        .then(res => res.json())
        .then(data => {
            setCount(data.count);
            setCurrentPage(1);
        })
        .catch(error => {
            console.error("Error fetching count:", error);
        });
}, [searchQuery, selectedBrand, selectedCategory, selectedRange]);

const handleSearchChange = (e) => {
  setInputValue(e.target.value);
};

const handleSearchSubmit = () => {
    // Send the search query to the backend
    setSearchQuery(inputValue);
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

  const clearAll = () => {
    setSearchQuery('')
    setSelectedBrand('')
    setSelectedCategory('')
    setSelectedPrice('')
    setSelectedDate('')
    setSelectedRange('')
  }

  const itemsPerPage = 6;
  const pages = [...Array(Math.ceil(count / itemsPerPage)).keys()].map(
    (data) => data + 1
  );

  const handleNext = () => {
    if (Math.ceil(count / itemsPerPage) > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["home", currentPage, selectedBrand,selectedCategory, selectedDate, selectedPrice, selectedRange, searchQuery],
  });

  const getData = async () => {
    const { data } = await axios(
      `${
        import.meta.env.VITE_URL
      }?page=${currentPage}&size=${itemsPerPage}&search=${searchQuery}&brand=${selectedBrand}&category=${selectedCategory}&price=${selectedPrice}&date=${selectedDate}&range=${selectedRange}`
    );
    return data;
  };

  return (
    <>
      <div className="drawer z-10 my-4">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="navbar bg-base-100 flex justify-center items-center flex-wrap">
            <div className="flex-1 flex justify-between items-center w-full md:w-auto">
              <a className="btn btn-ghost text-xl">eMart</a>
              <div className="form-control flex flex-grow md:flex-grow-0 md:ml-2">
              <div className="flex justify-center items-center">
      <input
        type="text"
        value={inputValue}
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
            {user ? <button className="btn ml-2" onClick={userSignOut}>Log out</button> : <Link to={'/login'} className="btn ml-2">Log in</Link>}
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
                <option value="500">0 - 500</option>
                <option value="750">501 - 750</option>
                <option value="1000">751 - 1000</option>
                <option value="1500">1001 - 1500</option>
                <option value="1500">1501 - above</option>
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
                    value="1"
                    checked={selectedPrice === "1"}
                    onChange={handlePriceChange}
                    className="radio radio-sm"
                  />
                  <span className="ml-2">Low to High</span>
                </label>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="price"
                    value="-1"
                    checked={selectedPrice === "-1"}
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
                    value="-1"
                    checked={selectedDate === "-1"}
                    onChange={handleDateChange}
                    className="radio radio-sm"
                  />
                  <span className="ml-2">Newest first</span>
                </label>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="date"
                    value="1"
                    checked={selectedDate === "1"}
                    onChange={handleDateChange}
                    className="radio radio-sm"
                  />
                  <span className="ml-2">Oldest first</span>
                </label>
              </div>
            </div>
            <button
              className="btn btn-error mt-4 w-full"
              onClick={clearAll}
            >
             <TiDeleteOutline className="text-lg" /> Clear Filters
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 my-6">
        <button onClick={handlePrevious} className={`btn btn-primary w-20 ${currentPage===1?'btn-disabled':''}`} >
          Previous
        </button>
        {pages.map((data) => (
          <button
            key={data}
            className={`btn ${currentPage === data ? "btn-info" : ""}`}
            onClick={() => setCurrentPage(data)}
          >
            {data}
          </button>
        ))}
        <button onClick={handleNext}  className={`btn btn-primary w-20 ${currentPage===Math.ceil(count / itemsPerPage)?'btn-disabled':''}`}>
          Next
        </button>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Slide
      />
    </>
  );
}

export default Home;

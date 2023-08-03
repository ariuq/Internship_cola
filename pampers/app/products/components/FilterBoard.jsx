'use client';
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { filterItems } from "./Filter";
import { test } from "./Test";


const FilterBoard = () => {
  const router = useRouter();
  const pathname = "http://localhost:3000/products";
  const searchParams = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState([]);
  // const [filteredItems, setFilteredItems] = useState (<ProductCard/>)

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  };
  console.log(test(selectedFilters));
  const handleSelectedFilters = (selectedCategory) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(selectedCategory)) {
        return prevFilters.filter((el) => el !== selectedCategory);
      } else {
        return [...prevFilters, selectedCategory];
      }
    });
  };
  

  useEffect(() => {
    if(selectedFilters.length > 0) {
      const queryString = createQueryString(
      "filter",
      selectedFilters.join("_")
    );
    router.push(pathname + "?" + queryString);
    } else {
      router.push(pathname);
    }
  }, [selectedFilters]);

  return (
    <>
    <section className="filters">
      <h2>Хэмжээгээр ангилах</h2>
      <button
        onClick={() => {
          setSelectedFilters([]);
          router.push(pathname);
        }}
      >
        <small className={selectedFilters.length>0? "underline" : "text-white"}>clear all</small>
      </button>
 
      <ul>
        {filterItems.map((filterItem) => (
          <button
            onClick={() => handleSelectedFilters(filterItem.urlName) }
            className={`${selectedFilters?.includes(filterItem.urlName) ? "active" : "diactive"
              }`}
          >
            <li>{filterItem.name}</li>
          </button>
        ))}
      </ul>
    </section>
    {/* <section>
      {selectedFilters.map ((filteredItem) => (
        <ProductCard/>
      ))}
    </section> */}
    </>
  );
};

export default FilterBoard;

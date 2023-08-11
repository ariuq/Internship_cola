'use client';
import { useEffect, useState } from "react";
import { useRouter} from "next/navigation";
import { filterItems } from "../../../utils/Filter";
import ProductCard from "./ProductCard";


const FilterBoard = ({products}) => {
  const router = useRouter();
  const pathname = "http://localhost:3000/products";
  const [selectedFilters, setSelectedFilters] = useState([]);

  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  };
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
    router.push(pathname + "?" + queryString , {scroll: false});
    } else {
      router.push(pathname, {scroll: false});
    }
  }, [selectedFilters]);
  

  return (
    <>
    
    <div className="flex flex-row w-full">
      <div className="flex basis-1/3">
    <section className="filters ">
      <div className="flex justify-between">
      <h2>Хэмжээгээр</h2>
      <button
        onClick={() => {
          setSelectedFilters([]);
          router.push(pathname);
        }}
      >
        <small className={selectedFilters.length>0? "clear" : "text-white"}>Clear all</small>
      </button>
      </div>
 
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
    </div>
    <div className="w-full flex flex-col">
    <section className="card-container">
      {selectedFilters.length >0 ? selectedFilters.map((product) => (
        <ProductCard products={products} filtername={product}/>
      )) : <ProductCard products={products} filtername=""/>}
      </section>
    </div>
   
    </div>
    
    </>
  );
};

export default FilterBoard;

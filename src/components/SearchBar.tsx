import ic_search from "../assets/images/ic_search.svg";

interface SearchBarProps {
  placeholderText: string;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <form className="flex flex-row h-14">
      <input
        type="search"
        id="search"
        className="w-full p-4 pl-8 text-sm text-gray-900 border-2 border-green-600 rounded-l-lg"
        placeholder={props.placeholderText}
        required
      />
      <button type="submit" className="bg-green-600 rounded-r-lg px-8">
        <img src={ic_search} className="h-8" alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;

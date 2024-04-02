import DropdownMenu from "./DropdownMenu";
import ic_special_offer from "../assets/images/ic_special_offer.svg";
import ic_recipe from "../assets/images/ic_recipe.svg";
import IconButton from "./buttons/IconButton"

const BottomHeader = () => {
  return (
    <div className="border border-gray-200">
    <div className="flex justify-between items-left mx-16">
      <div className="flex items-center space-x-16">
        <DropdownMenu />
        <button>Shop</button>
        <button>Products</button>
        <button>Features</button>
        <button>Blog</button>
        <button>Elements</button>
        <button>Buy Portal</button>

      </div>

      <div className="flex items-center float-right space-x-8">
        <IconButton style="font-bold" buttonText={"Special Offers"} icon={ic_special_offer} onClick={() => console.log('Special offer clicked')} />
        <IconButton style="font-bold" buttonText={"Recipes"} icon={ic_recipe} onClick={() => console.log('Recipes clicked')} />
      </div>
    </div>
    </div>
  )
}

export default BottomHeader

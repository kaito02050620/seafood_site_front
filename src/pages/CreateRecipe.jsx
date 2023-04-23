import React, { useContext, useState } from "react";
import InputDescription from "../components/input/Description";
import InputImage from "../components/input/Image";
import InputTitle from "../components/input/Title";
import InputFood from "../components/input/Food";
import InputCook from "../components/input/cook";
import InputCategory from "../components/input/category";
import InputSeaFoods from "../components/input/Seafoods";
import axios from "axios";
import { AuthContext } from "../state/AuthContext";
import { useNavigate } from "react-router-dom";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function CreateRecipe() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [amount, setAmount] = useState("");
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("");
  const [seaFood, setSeaFood] = useState("");
  const [seaFoods, setSeaFoods] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [cooks, setCooks] = useState([]);
  const [people, setPeople] = useState(1);

  //リクエストするオブジェクト
  const newRecipe = {
    userId: user._id,
    title: title,
    image: image,
    category: category,
    seafoods: seaFoods,
    foods: foods,
    description: description,
    people: Number(people),
    recipes: cooks,
  };

  //投稿ボタン、入力値のバリデーション
  const createRecipeButton = async (e) => {
    e.preventDefault();

    if (
      Object.values(newRecipe).every(
        (value) => value !== "" && value.length !== 0
      )
    ) {
      const uniquePrefix = `${Math.round(Math.random() * 1e9)}`;
      const data = new FormData();
      const fileName = `${Date.now()}-${uniquePrefix}-${image.name}`;
      data.append("name", fileName);
      data.append("file", image);
      newRecipe.image = fileName;
      try {
        await axios.post(API_SERVER + "/posts", newRecipe);
        await axios.post(API_SERVER + "/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("正常にデータが入力されました。");
        navigate(`/user/${user._id}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("未入力の項目があります");
    }
  };

  return (
    <>
      <form>
        <div className="sectionBoard md:p-16 sm:p-8 p-4">
          <div className=" sm:p-5 p-3 recipeListBoard">
            <div className=" w-full sm:mb-10 mb-7 md:text-2xl sm:text-xl text-lg">
              <h1 className="w-full text-center font-bold">レシピ投稿ページ</h1>
            </div>
            <InputTitle value={title} setTitle={setTitle} />
            <InputImage image={image} setImage={setImage} />
            <InputDescription
              description={description}
              setDescription={setDescription}
            />
            <InputCategory category={category} setCategory={setCategory} />
            <InputSeaFoods
              seaFood={seaFood}
              setSeaFood={setSeaFood}
              seaFoods={seaFoods}
              setSeaFoods={setSeaFoods}
            />
            <InputFood
              setPeople={setPeople}
              foods={foods}
              setFoods={setFoods}
              ingredient={ingredient}
              setIngredient={setIngredient}
              amount={amount}
              setAmount={setAmount}
            />
            <InputCook
              cooks={cooks}
              setCooks={setCooks}
              recipe={recipe}
              setRecipe={setRecipe}
            />
            <button
              className="bg-red-600 bg-opacity-60 p-5 rounded-sm border-solid border-gray-800 border block w-3/4 m-auto md:text-2xl sm:text-lg text-base my-5 font-bold"
              type="submit"
              onClick={(e) => createRecipeButton(e)}
            >
              レシピを投稿する
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateRecipe;

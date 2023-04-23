import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputDescription from "../components/input/Description";
import InputImage from "../components/input/Image";
import InputTitle from "../components/input/Title";
import InputFood from "../components/input/Food";
import InputCook from "../components/input/cook";
import InputCategory from "../components/input/category";
import InputSeaFoods from "../components/input/Seafoods";
import axios from "axios";
import { AuthContext } from "../state/AuthContext";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function EditRecipe() {
  const { user } = useContext(AuthContext);
  const [userRecipe, setUserRecipe] = useState([]);
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
  const [currentRecipe, setCurrentRecipe] = useState([]);
  const navigate = useNavigate();

  //投稿したレシピを取得、各入力値更新
  const { id } = useParams();
  useEffect(() => {
    const getRecipe = async () => {
      const res = await axios.get(API_SERVER + "/posts/" + id);
      setUserRecipe(res.data[0]);
      setSeaFoods(res.data[0].seafoods);
      setCategory(res.data[0].category);
      setTitle(res.data[0].title);
      setDescription(res.data[0].description);
      setImage(res.data[0].image);
      setPeople(res.data[0].people);
      setFoods(res.data[0].foods);
      setCooks(res.data[0].recipes);
      setCurrentRecipe(res.data[0]);
    };
    getRecipe();
  }, []);

  if (userRecipe === null) {
    return <p>読み込み中...</p>;
  }

  //更新用オブジェクト
  const editRecipe = {
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

  //編集完了ボタン、未入力チェック
  const createRecipeButton = async (e) => {
    e.preventDefault();

    if (
      Object.values(editRecipe).every(
        (value) => value !== "" && value.length !== 0
      )
    ) {
      if (image === currentRecipe.image) {
        try {
          await axios.put(API_SERVER + "/posts/" + userRecipe._id, editRecipe);
          alert("正常にデータが入力されました。");
          navigate(`/user/${user._id}`);
        } catch (error) {
          console.log(error);
        }
      } else {
        const uniquePrefix = `${Math.round(Math.random() * 1e9)}`;
        const data = new FormData();
        const fileName = `${Date.now()}-${uniquePrefix}-${image.name}`;
        data.append("name", fileName);
        data.append("file", image);
        editRecipe.image = fileName;
        try {
          await axios.put(API_SERVER + "/posts/" + userRecipe._id, editRecipe);
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
              <h1 className="w-full text-center font-bold">レシピ編集ページ</h1>
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
              onClick={(e) => createRecipeButton(e)}
            >
              編集完了
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditRecipe;

import React, { useState, useContext, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_SERVER = import.meta.env.VITE_API_SERVER;

function LikeButton({ recipe }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [addLike, setAddLike] = useState(recipe.likes.length);

  useEffect(() => {
    const getLike = () => {
      if (user) {
        const isLike = recipe.likes.includes(user._id);
        if (isLike) {
          setLike(true);
        } else {
          setLike(false);
        }
      } else {
        return;
      }
    };
    getLike();
  }, [setAddLike, setLike]);

  //良いねボタン
  const likeHandleButton = async (e) => {
    e.preventDefault();
    setLike(!like);

    try {
      await axios.put(`${API_SERVER}/posts/${recipe._id}/likes`, {
        userId: user._id,
      });
      if (like) {
        setAddLike(addLike - 1);
      } else {
        setAddLike(addLike + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goRegisterButton = async () => {
    if (
      confirm(
        "レシピにいいね！するにはログインが必要です。ログインページに移動しますか？"
      )
    ) {
      navigate("/login");
    } else {
      return;
    }
  };

  return (
    <div className=" absolute sm:top-5 top-3 sm:right-5 right-3">
      {user ? (
        <button onClick={(e) => likeHandleButton(e)} className="block">
          <BsFillHeartFill
            className={`${
              like ? "likeActive" : "likePassive"
            } sm:w-6 w-5 sm:h-6 h-5`}
          />
        </button>
      ) : (
        <button onClick={(e) => goRegisterButton(e)} className="block">
          <BsFillHeartFill color="gray" className={`sm:w-6 w-5 sm:h-6 h-5`} />
        </button>
      )}
      <span className="block text-center text-[12px]">{addLike}</span>
    </div>
  );
}

export default LikeButton;

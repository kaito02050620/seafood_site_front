import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzoneBasic(props) {
  const [dropImage, setDropImage] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //取得した画像バス取得（DB格納）、エンコード化（一時的に表示）する
  const handleAcceptedFiles = useCallback((file) => {
    setImagePath(file[0]);

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload = () => {
      setDropImage(reader.result);
    };
  }, []);

  //画面幅取得
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //取得画像のバリデーション
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      handleAcceptedFiles(acceptedFiles);
    },
  });

  useEffect(() => {
    props.setImage(imagePath);
    props.setPreview(dropImage);
  }, [props.setImage, dropImage]);

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full relative flex items-center justify-center"
        {...getRootProps()}
      >
        <input
          className="w-full h-full absolute"
          type="file"
          name="file"
          {...getInputProps()}
        />

        {windowWidth < 530 ? (
          <p className="md:text-base sm:text-sm text-xs">
            ここをタップして画像を選択
          </p>
        ) : (
          <p className="md:text-base sm:text-sm text-xs">
            ファイルをここにドラッグアンドドロップするか、
            <br />
            クリックしてファイルを選択してください
          </p>
        )}
      </div>
    </div>
  );
}

export default MyDropzoneBasic;

import React, { useState } from 'react'
import axios from 'axios'
import "./Admin_newProduct.css"

function Admin_newProduct() {
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productImg, setProductImg] = useState("")

  const sendToBackend = (e) => {
    e.preventDefault()
    if (productName === ""
      || productPrice === ""
      || productImg === ""
      || productName.length <= 3
      || productPrice.length <= 3
      || productImg.length <= 3) {
      alert("Majburiy maydonlarni to`ldiring")
    }

    if (!productImg.includes("jpg") && !productImg.includes("svg") && !productImg.includes("png") && !productImg.includes("jpeg")) {
      alert("Mahsulot rasmi haqiyqiy emas!")
    }

    axios
      .post('http://localhost:8000/newProduct/newProduct', {
        productName: productName,
        productPrice: productPrice,
        productImg: productImg
      })

      // .then((product) => console.log(product))
      .catch((err) => console.error(err));
    setProductName("")
    setProductImg("")
    setProductPrice("")
  }
  return (
    <div className='admin_newProduct'>
      <form>
        <p>Mahsulot nomi*</p>
        <input type="text" placeholder='Min 3' value={productName} onChange={(e) => setProductName(e.target.value)} />
        <p>Mahsulot narxi*</p>
        <input type="text" placeholder='Min 3' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        <p>Mahsulot rasmi*</p>
        <input type="text" placeholder='Min 3' value={productImg} onChange={(e) => setProductImg(e.target.value)} />
        <button style={productName === "" || productPrice === "" || productImg === "" || productName.length <= 3 || productPrice.length <= 3 || productImg.length <= 3 ? { cursor: "no-drop", background: "red" } : { cursor: "pointer" }} className="send_btn" onClick={sendToBackend}>Joylash</button>
      </form>
    </div>
  )
}

export default Admin_newProduct
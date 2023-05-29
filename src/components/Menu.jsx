import React from "react";
import "./tool.css"
import Product from "./Product";
import PickUpOrder from "./PickUpOrder";
// import { Margin } from "@mui/icons-material";

const Menu = (props) => {
    const storeName = Product[props.index].title;
    const items = Product[props.index].items;
    const itemNames = items.이름;

    return (
        <div style={{ maxHeight: "465px", overflowY: "auto" }}>
        {itemNames.map((itemName, index) => (
        <>
          <div key={index} style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
            <div style={{ width: "30%", marginRight: "50px", fontSize: "15px" }}>
              <h3>{itemName}</h3>
              <h3>리뷰({items.리뷰개수[index]})</h3>
              <h3>{items.가격[index]}</h3>
            </div>
            <div>
              <img
                style={{ width: "100%", height: "150px", border: "2px solid", borderRadius: "20px" }}
                alt="mark"
                src="./images/storeInfo/item.png"
              />
            </div>
          {<PickUpOrder itemName={itemName} storeName={storeName}></PickUpOrder>}
          </div>
          <hr color='gray' width='90%' align='left' />
        </>
        ))}
      </div>
    );
}
export default Menu;
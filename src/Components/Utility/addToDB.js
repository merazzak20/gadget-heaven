import { toast } from "react-toastify";

const getSelectedItems = () => {
  const selectedItemsStr = localStorage.getItem("select-list");
  if (selectedItemsStr) {
    const selectedList = JSON.parse(selectedItemsStr);
    return selectedList;
  } else {
    return [];
  }
};

const addToList = (id) => {
  const storeList = getSelectedItems();
  if (storeList.includes(id)) {
    toast.warn("Already Exists");
  } else {
    storeList.push(id);
    const selectedItemsStr = JSON.stringify(storeList);
    localStorage.setItem("select-list", selectedItemsStr);
    toast.success("Successfully Added to Cart");
  }
};

const getWhishList = () => {
  const whishItemsStr = localStorage.getItem("whish-list");
  if (whishItemsStr) {
    const selectedList = JSON.parse(whishItemsStr);
    return selectedList;
  } else {
    return [];
  }
};

const addToWhish = (id) => {
  const storeList = getWhishList();
  if (storeList.includes(id)) {
    toast.warn("Already Exists");
  } else {
    storeList.push(id);
    const whishItemsStr = JSON.stringify(storeList);
    localStorage.setItem("whish-list", whishItemsStr);
    toast.success("Successfully Added to Wishlist");
  }
};

export { addToList, addToWhish, getSelectedItems, getWhishList };

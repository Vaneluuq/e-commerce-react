import React from 'react';
import classNames from "classnames/bind";
import itemListStyles from "./item.module.css";
import { Link } from 'react-router-dom';
import MainModal from '../modal';
const cx = classNames.bind(itemListStyles);

const Item = ({ data }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className={cx("m-3", "card")} >
                <div className={cx("imagenHover", "relative h-3/4 flex justify-center items-center overflow-hidden")} >
                    <div className={cx("absolute top-2 right-0 p-1", "price")} >{`$ ${data.price}`}</div>
                    <div className={cx("divImg")} >
                        <img className={cx("w-32")} src={data.image}></img>
                    </div>
                    <div className={cx("absolute", "color")} >
                        <div className={cx("flex justify-center items-center w-full h-full")} >
                            <MainModal
                                classButton={cx("px-6 py-2 rounded-md text-white", "buttonAdd")}
                                openModal={openModal}
                                modalIsOpen={modalIsOpen}
                                labelButton={"Agregar al carrito"}
                                closeModal={closeModal}  >
                                Detail Product
                            </MainModal>
                        </div>
                    </div>
                </div>
                <div className={cx("h-1/4 overflow-hidden border-t-2 py-1")}>
                    <span className={cx("h-11", "aditionalStyle")} >{data.title}</span>
                    <Link to={`/item/${data.id}`} className={cx("aditionalStyle", "cursor-pointer hover:text-amber-600 hover:underline")}>Ver mas</Link>
                </div>
            </div>
        </>
    );
}

export default Item;
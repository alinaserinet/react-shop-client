import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../../components/SearchBox/SearchBox"
import LeftMenu from "../LeftMenu/LeftMenu"
import MainMenu from "../MainMenu/MainMenu"
import { IoBagHandle } from 'react-icons/io5'
import { useSelector } from "react-redux";

function Header() {

    const [leftMenuStatus, setLeftMenuStatus] = useState(false);
    const cart = useSelector(({ cart }) => cart.info);

    return (
        <header className="border-b">
            <div className="container py-6">
                <div className="flex justify-between items-center">
                    <div className="flex-col w-1/2 lg:w-1/4">
                        ONLINE SHOP
                    </div>
                    <div className="lg:flex-col lg:w-1/2 lg:mx-6 hidden lg:block">
                        <SearchBox />
                    </div>
                    <div className="flex-col w-1/2 lg:w-1/4">
                        <div className="mr-0 ml-auto text-right lg:w-48">
                            <Link to="/cart">
                                <div className="border px-3 py-2 rounded-lg lg:flex justify-between inline-block">
                                    <IoBagHandle size={24} className="text-gray-500" />
                                    {cart &&
                                        <div className="hidden lg:block">
                                            <span className="font-bold">{cart.total_unique_items}</span>
                                            <small className="font-semibold ml-1 text-gray-400">Item(s)</small>
                                        </div>
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <MainMenu
                setLeftMenuStatus={setLeftMenuStatus}
            />
            {leftMenuStatus &&
                <LeftMenu
                    setLeftMenuStatus={setLeftMenuStatus}
                    active={leftMenuStatus}
                />
            }
        </header>
    )
}

export default Header

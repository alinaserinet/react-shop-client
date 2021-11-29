import { useState } from "react";
import SearchBox from "../../../components/SearchBox/SearchBox"
import LeftMenu from "../LeftMenu/LeftMenu"
import MainMenu from "../MainMenu/MainMenu"

function Header() {

    const [leftMenuStatus, setLeftMenuStatus] = useState(false);

    return (
        <header className="border-b">
            <div className="container py-6">
                <div className="flex justify-between items-center">
                    <div>
                        ONLINE SHOP
                    </div>
                    <div>
                        <SearchBox />
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

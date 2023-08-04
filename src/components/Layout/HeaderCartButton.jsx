import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const HeaderCartButton = props => {
    return (
        <button onClick={props.onClick} className="flex cursor-pointer items-center bg-[#4d1601] rounded-full py-2 px-12 text-l active:bg-[#2c0d00] hover:bg-[#2c0d00] animate-[bump_300ms_ease-out]">
            <span className="pr-2 h-6"><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></span>
            <span>Your Cart</span>
            <span className="rounded-full bg-[#b94517] ml-4 font-bold px-4 py-1">3</span>
            </button>
    )
}

export default HeaderCartButton
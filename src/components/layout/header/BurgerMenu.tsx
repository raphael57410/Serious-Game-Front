import clsx from "clsx";
import styles from "../_css/burgermenu.module.css";

type Props = {
    visible: boolean;
    openMobileMenu: () => void;
};

export default function BurgerMenu(props: Props) {
    return (
        <div
            className={"flex items-center mr-16 flex-col justify-center md:hidden"}
            onClick={() => props.openMobileMenu()}
        >
            <div className={clsx("w-8 h-1 bg-primaryColor my-1.5", {
                [styles.first_bar]: props.visible,
            })}></div>
            <div className={clsx("w-8 h-1 bg-primaryColor my-1.5", {
                [styles.middle_bar]: props.visible,
            })}></div>
            <div className={clsx("w-8 h-1 bg-primaryColor my-1.5", {
                [styles.last_bar]: props.visible,
            })}></div>
        </div>
    );
}

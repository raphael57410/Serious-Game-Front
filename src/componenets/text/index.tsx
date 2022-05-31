import clsx from "clsx";

type Props = {
    text: string,
    white?: boolean,
    center?: boolean,
    size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl",
};

export function Text(props: Props) {
    return (
        <p className={clsx(
            `text-${props.size}`,
            { "text-white": props.white },
            { "text-textColor": !props.white },
            { "text-center": props.center },
        )}>{props.text}</p>
    );
}

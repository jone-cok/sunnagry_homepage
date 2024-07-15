export interface IButton {
    text: string;

    iconsrc?: string;
    iconalt?: string;
    formclassName?: string;
    formstyle?: React.CSSProperties;
    buttonclassName?: string;
    buttonstyle?: React.CSSProperties;
    imgclassName?: string;
    imgstyle?: React.CSSProperties;
    children?: React.ReactNode;

}
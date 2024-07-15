export interface IGradientBox {
    showBox?: boolean;

    setbackground?: string;
    setlabelback?: string;

    iconsrc?: string;
    iconalt?: string;
    text_centertop?: string;
    text_centerbot?: string;
    text_label?: string;
    price?: number;
    cardclassName?: string;
    cardstyle?: React.CSSProperties;
    imgclassName?: string;
    imgstyle?: React.CSSProperties;
    divclassNametop?: string;
    divstyletop?: React.CSSProperties;
    divclassNamebot?: string;
    divstylebot?: React.CSSProperties;
    labelclassName?: string;
    labelstyle?: React.CSSProperties;
    children?: React.ReactNode;
    children1?: React.ReactNode;
    children_text?: React.ReactNode;
}
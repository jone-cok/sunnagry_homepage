export interface ITimeCard {
    value: string;
    text: string;
    width?: string;
    height?: string;
}


export interface IPictureCard {
    imgsrc?: string;
    imgalt?: string;

    show_icon_top?: string;
    show_text_bot?: string;
    imgsrc_top?: string;
    awardvalue?: string;
    iconsrc_bot_left?: string;
    text_bot_left?: string;
    iconsrc_bot_right?: string;
    text_bot_right?: string;


    text?: string;
    price?: number;
    cardclassName?: string;
    cardstyle?: React.CSSProperties;
    divclassName?: string;
    divstyle?: React.CSSProperties;
    imgclassName?: string;
    imgstyle?: React.CSSProperties;
    children?: React.ReactNode;
}
export interface IDataCard {
    topiconsrc?: string;
    topiconalt?: string;
    topicontitle?: string;
    title?: string;
    level: number;
    text?: string;
    backcolor?: string;
    fontcolor?: string;
    bordercolor?: string;
    buttoniconsrc?: string;
    buttonicontext?: string;
    minusiconsrc?: string;
    moreiconsrc?: string;
    cardclassName?: string;
    cardstyle?: React.CSSProperties;
    divclassName?: string;
    divstyle?: React.CSSProperties;
    imgclassName?: string;
    imgstyle?: React.CSSProperties;
    children?: React.ReactNode;
}
export interface INopCard {
    text_title_left?: string;
    text_title_right?: string;
    imgsrc?: string;
    imgalt?: string;
    text_cont_top?: string;
    text_cont_bot?: string;



    class_container?: string;
    style_container?: React.CSSProperties;

    class_title?: string;
    style_title?: React.CSSProperties;

    class_t_left?: string;
    style_t_left?: React.CSSProperties;

    class_t_right?: string;
    style_t_right?: React.CSSProperties;

    class_line?: string;

    class_content?: string;
    style_content?: React.CSSProperties;

    class_cont_top?: string;
    style_cont_top?: React.CSSProperties;

    class_cont_bot?: string;
    style_cont_bot?: React.CSSProperties;

    class_img?: string;
    style_img?: React.CSSProperties;

    children_content?: React.ReactNode;
    children_bottom?: React.ReactNode;

}
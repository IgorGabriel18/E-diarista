import React from "react";
import {
    PageTitleConatiner,
    PageTitleStyled,
    PageSubTitleStyled,
} from "./PageTitle.style";

export interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <PageTitleConatiner>
            <PageTitleStyled>{title}</PageTitleStyled>
            <PageSubTitleStyled>{subtitle}</PageSubTitleStyled>
        </PageTitleConatiner>
    );
};

export default PageTitle;

import React from "react";

type ModalViewType = {
    children?: React.ReactNode;
    title?: string;
    isOpen?: boolean;
    modalViewAction: (state: boolean) => void | any;
};

export type { ModalViewType };
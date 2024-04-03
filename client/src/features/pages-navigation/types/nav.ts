import React from "react";

export interface TNavBlock {
    id: string,
    icon: React.ReactNode,
    link: string | null,
    title: string,
    receiveNotes: (data: any) => number | null,
    inner: Array<TNavBlock> | null
}
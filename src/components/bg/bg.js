import React from "react";

export function BG(props){

    function bubbleLine(){

        const bubbles = [];

        for(let i=1; i<4; i++){
            bubbles.push(<div className={`bubble n${i}`}>
                <p>{"<{/&<(>%=}"}</p>
            </div>);
        }
        return bubbles
    }

    return(
        <div className={'bgWrap'}>
            <div className={'codeRow top'}>
                <p className={'bgCode one'}>{"<${&}"}</p>
                <p className={'bgCode two'}>{"<${&}"}</p>
                <p className={'bgCode three'}>{"<${&}"}</p>
                <p className={'bgCode four'}>{"<${&}"}</p>
                <p className={'bgCode five'}>{"<${&}"}</p>
            </div>
            <div className={'codeRow bottom'}>
                <p className={'bgCode one'}>{"{<=%>=$}"}</p>
                <p className={'bgCode two'}>{"{<=%>=$}"}</p>
                <p className={'bgCode three'}>{"{<=%>=$}"}</p>
                <p className={'bgCode four'}>{"{<=%>=$}"}</p>
                <p className={'bgCode five'}>{"{<=%>=$}"}</p>
            </div>
            {/*}
            <p className={'bgCode one'}>{"<{/&<(>%=}"}</p>
            <p className={'bgCode two'}>{"<{/&<(>%=}"}</p>
            <p className={'bgCode three'}>{"<{/&<(>%=}"}</p>
            <p className={'bgCode four'}>{"<{/&<(>%=}"}</p>
            {*/}
        </div>
    )
}
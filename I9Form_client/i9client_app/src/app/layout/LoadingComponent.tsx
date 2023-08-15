import { Dimmer, Loader } from "semantic-ui-react";
import React from "react";

interface Props{
    inverted?: boolean;
    content?: string;

}

export default function LoadingComponent({inverted = true, content='Loading...'}: Props){
    return(
        <Dimmer acitve={true} inverted={inverted}>
            <Loader text content={content}/>
        </Dimmer>
    )
}
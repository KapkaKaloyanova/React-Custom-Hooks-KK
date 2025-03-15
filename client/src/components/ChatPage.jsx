import '@ant-design/v5-patch-for-react-19';

import useFetch from "../hooks/useFetch";
import Chat from "./Chat";
import { Spin } from "antd";

const url= 'http://localhost:3030/jsonstore/messages';

export default function ChatPage() {
    const [pending, messages] = useFetch(url, []);
    
    if (pending){
        return <Spin />
    }
    return (
        <>
            <Chat messages={messages} />
        </>
    );
}
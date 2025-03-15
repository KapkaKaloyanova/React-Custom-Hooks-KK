import '@ant-design/v5-patch-for-react-19';

import React  from "react";
import { Avatar, List } from "antd";


export default function Chat({ 
    messages, 
}) {

  // const [ list, setList ] = useState([]);
  return (
    <List
      className="demo-loadmore-list"
    //   loading={pending}
      itemLayout="horizontal"
    //   loadMore={loadMore}
    dataSource={messages}
      bordered
      renderItem={(message) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
            <List.Item.Meta
              avatar={<Avatar src="http://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
              title={<a href="https://ant.design">{message.author}</a>}
              description={message.content}
            />
        </List.Item>
      )}
    />
  );
}

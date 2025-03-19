 import React,{useState} from 'react';
 import { view,text,button} from 'react-native';
import { Button, View } from 'react-native-web';

 const Counter = () => {
    const [count,setCount] = useState(0);
    return(
        <view>
            <Button onPress={() => { setCount(count+1)}} title="click Me"/>
            <Button onPress={() => {setCount(count -1)}} title="click Me"/>
        
            <Button onPress={() => {setCount(0)}} title="Reset"/>
                <text>You Clickedme {count} times </text>
        
  </view>
 );
}
export default Counter;
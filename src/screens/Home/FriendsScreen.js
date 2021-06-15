import * as React from 'react';
import { List } from 'react-native-paper';

export default function FriendsScreen() {
    return(
        <List.Item
    title="Friends #1"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
    );
}

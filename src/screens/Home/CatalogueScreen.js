import * as React from 'react';
import { List } from 'react-native-paper';

export default function CatalogueScreen() {
    return(
        <List.Item
    title="Starbucks 20% off!!"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
    );
}

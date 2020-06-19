import React from 'react';
import { SearchBar } from "react-native-elements";

export default class MySearchBar extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        platform='android'
        containerStyle={{
          borderRadius: 50,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          height: 30,
          width: 200,
        }}
        inputStyle={{
          fontSize: 16,
          paddingBottom: 30
        }}
        searchIcon={{
          paddingBottom: 30,
          size: 18
        }}
      />
    );
  }
}

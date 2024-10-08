import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "Блузы",
          name: "Блузы",
        },
        {
          key: "Брюки",
          name: "Брюки",
        },
        {
          key: "Верхняя одежда",
          name: "Верхняя одежда",
        },
        {
          key: "Жакеты",
          name: "Жакеты",
        },
        {
          key: "Костюмы",
          name: "Костюмы",
        },
        {
          key: "Платья",
          name: "Платья",
        },
        {
          key: "Футболки",
          name: "Футболки",
        },
        {
          key: "Рубашки",
          name: "Рубашки",
        },
        {
          key: "Джинсы",
          name: "Джинсы",
        },
        {
          key: "Сарафаны",
          name: "Сарафаны",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;

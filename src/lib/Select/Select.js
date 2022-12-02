import { Component } from 'react';

import cn from 'classnames';

import OutsideClickHandler from '../OutsideClickHandler/OutsideClickHandler';

import styles from './Select.module.scss';

const months = [
  // 'Month',
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
//   january: 1,
//   february: 2,
//   march: 3,
//   april: 4,
//   may: 5,
//   june: 6,
//   july: 7,
//   august: 8,
//   september: 9,
//   october: 10,
//   november: 11,
//   december: 12,
// };

const years = {
  2018: 1,
  2019: 2,
  2020: 3,
  2021: 4,
  2022: 5,
  2023: 6,
};

class Select extends Component {
  state = {
    isOptionsOpen: false,
    selectedOption: 11,
  };

  // componentDidUpdate() {
  //   this.writeQuerySelectedCurrency(this.state.selectedOption);
  // }

  toggleOptions = () => {
    this.setState({ isOptionsOpen: !this.state.isOptionsOpen });
  };

  // writeQuerySelectedCurrency = index => {
  //   if (!this.props.data.loading) {
  //     client.writeQuery({
  //       query: SELECTED_CURRENCY,
  //       data: {
  //         selectedCurrency: {
  //           __typename: 'SelectedCurrency',
  //           symbol: this.props.data.currencies[index].symbol,
  //           label: this.props.data.currencies[index].label,
  //         },
  //       },
  //     });
  //   }
  // };

  setSelectedThenCloseDropdown = index => {
    this.setState(
      {
        selectedOption: index,
        isOptionsOpen: false,
      }
      // () => this.writeQuerySelectedCurrency(index)
    );
  };

  handleKeyDown = index => e => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        this.setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  handleListKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        this.setState({ isOptionsOpen: false });
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption - 1 >= 0
              ? this.state.selectedOption - 1
              : this.props.data.currencies.length - 1,
        });
        break;
      case 'ArrowDown':
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption === this.props.data.currencies.length - 1
              ? 0
              : this.state.selectedOption + 1,
        });
        break;
      default:
        break;
    }
  };

  render() {
    // const {
    //   data: { currencies, loading },
    // } = this.props;
    console.log('months:', months);

    return (
      <div className={styles.wrapper}>
        {/* {!loading && ( */}
        <div className={styles.container}>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={this.state.isOptionsOpen}
            className={cn(
              styles.textBtnMoney,
              this.state.isOptionsOpen ? styles.expanded : ''
            )}
            onClick={this.toggleOptions}
            onKeyDown={this.handleListKeyDown}
          >
            {months[this.state.selectedOption]}
          </button>
          <OutsideClickHandler
            onOutsideClick={() => {
              this.setState({ isOptionsOpen: false });
            }}
          >
            <ul
              className={cn({
                [styles.show]: this.state.isOptionsOpen,
                [styles.options]: true,
              })}
              role="listbox"
              aria-activedescendant={months[this.state.selectedOption]}
              tabIndex={-1}
              onKeyDown={this.handleListKeyDown}
            >
              {months.map((month, index) => (
                <li
                  className={styles.item}
                  key={months[index]}
                  id={months[index]}
                  role={months[index]}
                  aria-selected={this.state.selectedOption === index}
                  tabIndex={0}
                  onKeyDown={this.handleKeyDown(index)}
                  onClick={() => {
                    this.setSelectedThenCloseDropdown(index);
                  }}
                >
                  {months[index]}
                </li>
              ))}
            </ul>
          </OutsideClickHandler>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default Select;
// export default graphql(GET_KIND_OF_CURRENCIES)(withRouter(Select));

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styles from '../styles/SavePopupForm.css';

class SavePopupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: '',
      createValid: false,
    };
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.createListHandler = this.createListHandler.bind(this);
  }

  onCloseHandler() {
    const { showCreateListForm } = this.props;
    showCreateListForm();
  }

  onInputChangeHandler(e) {
    this.setState({ listName: e.target.value, createValid: true });

    if (e.target.value.length === 0) {
      this.setState({ createValid: false });
    }
  }

  createListHandler() {
    const { listName } = this.state;
    const { saveToList } = this.props;
    saveToList(listName, true);
    this.setState({ listName: '' });
  }

  render() {
    const { createValid, listName } = this.state;
    const cursorClasses = createValid ? `${styles.saveToListCreateBtn} ${styles.allowedCursor}` : `${styles.saveToListCreateBtn} ${styles.notAllowedCursor}`;

    return (
      <div className={styles.savePopupForm}>
        <div className={styles.saveToListName}>
          Name
        </div>
        <div className={styles.saveToListInputWrapper}>
          <input className={styles.saveToListInput} name="name" placeholder="Ex: Summer vacation" type="text" value={listName} onChange={this.onInputChangeHandler} />
        </div>
        <div className={styles.saveToListBtnWrapper}>
          <button className={cursorClasses} type="submit" onClick={this.createListHandler}>
            Create
          </button>
          <button className={styles.saveToListCancelBtn} type="submit" onClick={this.onCloseHandler}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default SavePopupForm;

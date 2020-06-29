/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import SVG from 'react-inlinesvg';
import CloseForm from './airbnb-close-form.svg';
import Facebook from './airbnb-facebook.svg';
import Twitter from './airbnb-twitter.svg';
import Messenger from './airbnb-messenger.svg';
import Email from './airbnb-email.svg';
import Copylink from './airbnb-copylink.svg';
import Whatsapp from './airbnb-whatsapp.svg';
import Sms from './airbnb-sms.svg';
import Embed from './airbnb-embed.svg';
import styles from '../styles/SharePopup.css';

class SharePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  onCloseHandler() {
    this.props.backToGalleryDetail();
  }

  render() {
    return (
      <div className={styles.sharePopupInner}>
        <div className={styles.shareCloseBtnWrapper}>
          <button className={styles.shareCloseBtn} onClick={this.onCloseHandler}><SVG src={CloseForm} /></button>
        </div>
        <div className={styles.shareContentContainer}>
          <table>
            <tbody>
              <tr className={styles.shareRow}>
                <td>
                  <span className={styles.shareSpan}>Share</span>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Facebook} />
                    <span className={styles.shareMethodLink}>Facebook</span>
                  </button>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Twitter} />
                    <span className={styles.shareMethodLink}>Twitter</span>
                  </button>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Messenger} />
                    <span className={styles.shareMethodLink}>Messenger</span>
                  </button>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Email} />
                    <span className={styles.shareMethodLink}>Email</span>
                  </button>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Copylink} />
                    <span className={styles.shareMethodLink}>Copy Link</span>
                  </button>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Whatsapp} />
                    <span className={styles.shareMethodLink}>WhatsApp</span>
                  </button>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Sms} />
                    <span className={styles.shareMethodLink}>SMS</span>
                  </button>
                </td>
              </tr>
              <tr className={styles.shareRow}>
                <td>
                  <button className={styles.shareMethodBtn}>
                    <SVG src={Embed} />
                    <span className={styles.shareMethodLink}>Embed</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SharePopup;

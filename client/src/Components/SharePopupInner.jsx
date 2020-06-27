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
import '../styles/SharePopup.css';

class SharePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  onCloseHandler() {
    console.log('close clicked');
    this.props.backToGalleryDetail();
  }
  // give triple div. top bottom  is opaque, middle is form

  render() {
    return (
      <div className="share-popup-inner">
        <div className="share-closeBtn-wrapper">
          <button className="share-close-btn" onClick={this.onCloseHandler}><SVG src={CloseForm} /></button>
        </div>
        <div className="share-content-container">
          <table>
            <tbody>
              <tr className="share-row">
                <td>
                  <span className="share-span">Share</span>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Facebook} />
                    <span className="share-method-link">Facebook</span>
                  </button>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Twitter} />
                    <span className="share-method-link">Twitter</span>
                  </button>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Messenger} />
                    <span className="share-method-link">Messenger</span>
                  </button>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Email} />
                    <span className="share-method-link">Email</span>
                  </button>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Copylink} />
                    <span className="share-method-link">Copy Link</span>
                  </button>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Whatsapp} />
                    <span className="share-method-link">WhatsApp</span>
                  </button>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Sms} />
                    <span className="share-method-link">SMS</span>
                  </button>
                </td>
              </tr>
              <tr className="share-row">
                <td>
                  <button className="share-method-btn">
                    <SVG src={Embed} />
                    <span className="share-method-link">Embed</span>
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

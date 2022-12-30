import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Title from "./Title";
import { sendFeedBack } from "../api/actions";

export class CommunicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Competion: "",
      URL: window.location.origin,
      Text: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      Name: this.state.Name,
      Competion: this.state.Competion,
      URL: this.state.URL,
      Text: this.state.Text,
    };
    let response = await sendFeedBack(data);

    if (response.status === 200) {
      window.location.reload();
    }
  };

  render() {
    return (
      <Form className="contact-form" onSubmit={this.handleSubmit}>
        <Title title="Связаться с нами" />
        <div className="contact-form__form-fields">
          <Form.Control
            type="text"
            placeholder="ФИО"
            className="contact-form__form-field"
            onChange={(event) => {
              this.setState({ Name: event.target.value });
            }}
          />
          <Form.Control
            type="text"
            placeholder="Название конкурса"
            className="contact-form__form-field"
            onChange={(event) => {
              this.setState({ Competion: event.target.value });
            }}
          />
          <Form.Control
            type="text"
            placeholder="Cсылка на материалы"
            className="contact-form__form-field"
            onChange={(event) => {
              this.setState({ URL: event.target.value });
            }}
          />
          <Form.Control
            as="textarea"
            placeholder="Текст сообщения"
            className="contact-form__text-input contact-form__text-input_message"
            onChange={(event) => {
              this.setState({ Text: event.target.value });
            }}
          />
          <Button
            variant="primary"
            className="btn-primary btn-right contact-form__submit-button"
            type="submit"
          >
            Отправить
          </Button>
        </div>
      </Form>
    );
  }
}
